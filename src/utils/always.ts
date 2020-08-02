export const always = <T>(value: T): (() => T) => {
  return () => value
}
