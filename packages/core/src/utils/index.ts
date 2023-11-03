export function mergeClasses(classes: string[]): string {
  return classes.filter(item => item !== '').join(' ')
}