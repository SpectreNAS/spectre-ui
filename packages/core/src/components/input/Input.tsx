
import { mergeClasses } from '../../utils'
import { InputProps, generateProps } from './input.props'

export const Input = (propsRaw: InputProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const inputClasses = () => mergeClasses([
    'sp-input',
    props.class ?? ''
  ])

  return (
    <div class={inputClasses()}>
      <div class='sp-input-wrapper'>
        <div></div>
        <input class='sp-input-inner'></input>
        <div></div>
      </div>
    </div>
  )
}