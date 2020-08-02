export const times = <T>(callback: (index: number) => T, length: number) =>
  [...new Array(length)].map((_, index) => callback(index))
