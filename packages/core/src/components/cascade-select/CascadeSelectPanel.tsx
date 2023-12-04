import { For, JSX, Show, createEffect, createSignal } from 'solid-js'

import { CascadeSelectPanelProps, generateProps, CascadeSelectOption, CascadeSelectSingleValue, CascadeSelectMultipleValue } from './cascade-select-panel.props'
import { mergeClasses } from '../../utils'
import { SpButton } from '../button'
import { SpCheckbox } from '../checkbox'
import { SpScrollArea } from '../scroll-area'

interface OptionStatus {
  label?: JSX.Element
  value: string
  disabled?: boolean

  parent?: string
  checked: boolean
  indeterminate: boolean
  leaf: boolean
  childrenValues: string[]
}

type OptionStatusMap = Map<string, OptionStatus>

export const CascadeSelectPanel = (propsRaw: CascadeSelectPanelProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  let optionsStatusMap: OptionStatusMap = new Map()
  const [selected, setSelected] = createSignal<CascadeSelectSingleValue>([])
  const [multipleSelected, setMultipleSelected] = createSignal<CascadeSelectMultipleValue>([])
  const [cascades, setCascades] = createSignal<OptionStatus[][]>([])

  const cascadeSelectClasses = () => mergeClasses([
    'sp-cascade-select-panel',
    props.class ?? ''
  ])

  createEffect(() => {
    optionsStatusMap = resetOptionsStatusMap(props.options)
    let leafValue: string | undefined
    if (props.multiple) {
      const multipleSelected = setMultipleSelected(props.value as CascadeSelectMultipleValue)
      const firstSelected = multipleSelected[0]
      if (firstSelected) {
        leafValue = firstSelected[firstSelected.length - 1]
      }
    } else {
      const selected = setSelected(props.value as CascadeSelectSingleValue)
      leafValue = selected[selected.length - 1]
    }
    setCascades([
      getRootOptions(props.options),
      ...(leafValue !== undefined ? generateChildrenCascades(optionsStatusMap, leafValue) : [])
    ])
  })

  /**
   * 获取第一级的选项
   * @param options 
   * @returns 
   */
  function getRootOptions(options: CascadeSelectOption[]): OptionStatus[] {
    const rootOptions: OptionStatus[] = []
    for (const option of options) {
      const rootOption = optionsStatusMap.get(option.value)
      if (rootOption) {
        rootOptions.push(rootOption)
      }
    }
    return rootOptions
  }

  /**
   * 设置父级选中框状态
   * @param parent 
   */
  function setParentCheckbox(parent: string) {
    const parentOption = optionsStatusMap.get(parent)
    if (parentOption) {
      let indeterminate = false
      let checked = true
      for (const childValue of parentOption.childrenValues) {
        const childOption = optionsStatusMap.get(childValue)
        if (childOption) {
          if (!indeterminate) {
            indeterminate = childOption.checked || childOption.indeterminate
          }
          if (!childOption.checked) {
            checked = false
          }
        }
      }
      parentOption.checked = checked
      parentOption.indeterminate = !checked && indeterminate
      if (parentOption.parent) {
        setParentCheckbox(parentOption.parent)
      }
    }
  }

  /**
   * 设置子级选择框状态
   * @param childrenValues 
   * @param checked 
   */
  function setChildrenCheckbox(childrenValues: string[], checked: boolean) {
    for (const childValue of childrenValues) {
      const childOption = optionsStatusMap.get(childValue)
      if (childOption) {
        childOption.checked = checked
        childOption.indeterminate = false
        if (childOption.childrenValues.length > 0) {
          setChildrenCheckbox(childOption.childrenValues, checked)
        }
      }
    }
  }

  function generateMultipleSelected(optionValues: string[], values: string[] = []): CascadeSelectMultipleValue {
    let selected: CascadeSelectMultipleValue = []
    for (const optionValue of optionValues) {
      const option = optionsStatusMap.get(optionValue)
      if (option && (option.checked || option.indeterminate)) {
        if (option.childrenValues.length > 0) {
          selected = [...selected, ...generateMultipleSelected(option.childrenValues, [...values, option.value])]
        } else {
          selected.push([...values, option.value])
        }
      }
    }
    return selected
  }

  /**
   * 点击切换子集选项
   * @param level 
   * @param option 
   */
  function onSwitchChildrenOptions(level: number, option: OptionStatus) {
    const selectedOptions = [...selected()]
    if (selectedOptions[level] === option.value) {
      return
    }
    selectedOptions[level] = option.value
    const nextOption = selectedOptions[level + 1]
    if (nextOption && !(optionsStatusMap.get(nextOption)?.parent === option.value)) {
      selectedOptions.splice(level + 1, selectedOptions.length)
    }
    setSelected(selectedOptions)
    setCascades(value => {
      const cascades = value.slice(0, level + 1)
      const children = getChildrenOptions(optionsStatusMap, option.value)
      if (children.length > 0) {
        cascades.push(children)
      }
      return cascades
    })
  }

  /**
   * 点击叶子选项
   * @param level 
   * @param option 
   */
  function onLeafOption(level: number, option: OptionStatus) {
    onSwitchChildrenOptions(level, option)
    if (option.leaf) {
      props.change?.(selected())
    }
  }

  function onClickOption(event: MouseEvent) {
    event.stopPropagation()
  }

  /**
   * 多选选择选项
   * @param level 
   * @param option 
   */
  function onCheckedOption(level: number, option: OptionStatus) {
    onSwitchChildrenOptions(level, option)
    option.checked = !option.checked
    option.indeterminate = false
    if (option.parent) {
      setParentCheckbox(option.parent)
    }
    setChildrenCheckbox(option.childrenValues, option.checked)
    const cascades = setCascades((value) => [...value.map(options => [...options])])
    const rootOptions = cascades[0]?.map(option => option.value)
    const selected = setMultipleSelected(generateMultipleSelected(rootOptions))
    props.change?.(selected)
  }

  return (
    <div
      class={cascadeSelectClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <For each={cascades()}>
        {
          (options, level) => (
            <SpScrollArea>
              <div class='sp-cascade-select-column'>
                <For each={options}>
                  {
                    (option) => (
                      <SpButton
                        class='sp-cascade-select-option'
                        classList={{ selected: selected().includes(option.value) }}
                        onClick={() => onLeafOption(level(), option)}
                      >
                        <Show when={props.multiple}>
                          <SpCheckbox
                            class='sp-cascade-select-option-checkbox'
                            size='medium'
                            indeterminate={option.indeterminate}
                            value={option.checked}
                            change={() => onCheckedOption(level(), option)}
                            onClick={onClickOption}
                          />
                        </Show>
                        {option.label}
                      </SpButton>
                    )
                  }
                </For>
              </div>
            </SpScrollArea>
          )
        }
      </For>

    </div>
  )
}

function resetOptionsStatusMap(options: CascadeSelectOption[], parent?: string): OptionStatusMap {
  const map = new Map<string, OptionStatus>()
  for (const option of options) {
    if (option.children && option.children.length > 0) {
      resetOptionsStatusMap(option.children, option.value).
        forEach((value, key) => map.set(key, value))
    }
    map.set(
      option.value,
      {
        label: option.label,
        value: option.value,
        disabled: option.disabled,
        parent,
        checked: false,
        indeterminate: false,
        leaf: !(option.children && option.children.length > 0),
        childrenValues: option?.children?.map(child => child.value) ?? [],
      }
    )
  }
  return map
}

function generateChildrenCascades(map: OptionStatusMap, value: string): OptionStatus[][] {
  let cascades: OptionStatus[][] = []
  const option = map.get(value)
  if (option) {
    const childrenOptions: OptionStatus[] = []
    for (const childValue of option.childrenValues) {
      const childOption = map.get(childValue)
      if (childOption) {
        childrenOptions.push(childOption)
      }
    }
    cascades.push(childrenOptions)
    if (option.parent) {
      cascades = [...generateChildrenCascades(map, option.parent), ...cascades]
    }
  }
  return cascades
}

function getChildrenOptions(map: OptionStatusMap, value: string): OptionStatus[] {
  const children: OptionStatus[] = []
  const option = map.get(value)
  if (option) {
    for (const childValue of option.childrenValues) {
      const childOption = map.get(childValue)
      if (childOption) {
        children.push(childOption)
      }
    }
  }
  return children
}