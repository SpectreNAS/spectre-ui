import { For, JSX, createEffect, createSignal } from 'solid-js'

import { CascadeSelectPanelProps, generateProps, CascadeSelectOption } from './cascade-select-panel.props'
import { mergeClasses } from '../../utils'
import { SpScrollArea } from '../scroll-area'

interface OptionStatus {
  label?: JSX.Element
  value: string
  disabled?: boolean

  parent?: string
  check: boolean
  indeterminate: boolean
  leaf: boolean
  childrenValues: string[]
}

type OptionStatusMap = Map<string, OptionStatus>

export const CascadeSelectPanel = (propsRaw: CascadeSelectPanelProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  let optionsStatusMap: OptionStatusMap = new Map()
  const [selected, setSelected] = createSignal<string[]>([])
  const [cascades, setCascades] = createSignal<OptionStatus[][]>([])

  const cascadeSelectClasses = () => mergeClasses([
    'sp-cascade-select-panel',
    props.class ?? ''
  ])

  createEffect(() => {
    optionsStatusMap = resetOptionsStatusMap(props.options)
    setCascades([
      getRootOptions(props.options),
      ...(props.value !== undefined ? generateChildrenCascades(optionsStatusMap, props.value) : [])
    ])
  })

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

  function onActiveOption(level: number, option: OptionStatus) {
    const selectedOptions = [...selected()]
    if (selectedOptions[level] !== option.value) {
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
                      <div
                        class='sp-cascade-select-option'
                        classList={{ active: selected().includes(option.value) }}
                        onClick={() => onActiveOption(level(), option)}
                      >
                        {option.label}
                      </div>
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
        check: false,
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