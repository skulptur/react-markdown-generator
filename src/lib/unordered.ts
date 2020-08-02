import { prefix } from '../utils/prefix'
import { lines } from '../utils/lines'

export const unordered = (stringArray: Array<string>) =>
  lines(stringArray.map(str => prefix('* ', str)))
