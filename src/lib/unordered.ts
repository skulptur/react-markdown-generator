import { prefix } from '../utils/prefix'
import { lines } from '../utils/lines'
import { lineBreak } from './lineBreak'

export const unordered = (stringArray: Array<string>) =>
  prefix(lineBreak(), lines(stringArray.map(str => prefix('* ', str))))
