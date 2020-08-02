export const times = <T>(callback: (index: number) => T, length: number) => {
  return [...new Array(length)].map((_, index) => callback(index))
}
