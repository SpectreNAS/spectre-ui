import { mergeClasses } from '../../utils'
import { LinkProps, generateProps } from './link.props'

export const Link = (propsRaw: LinkProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const underlineClass = () => {
    if (props.underline === 'always') {
      return 'is-underline always'
    }
    if (props.underline) {
      return 'is-underline'
    }
    return ''
  }

  const linkClasses = () => mergeClasses([
    'sp-link',
    props.color ?? '',
    underlineClass(),
    props.class ?? '',
  ])

  return (
    <a
      class={linkClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      href={props.href}
      {...eventHandlers}
    >
      {props.children}
    </a>
  )
}