import { prefix } from '../utils/prefix'
import { lines } from '../utils/lines'

export const ordered = (stringArray: Array<string>) =>
  lines(stringArray.map((str, index) => prefix(`${index + 1}. `, str)))
