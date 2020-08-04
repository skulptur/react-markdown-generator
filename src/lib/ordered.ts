import { prefix } from '../utils/prefix'
import { lines } from '../utils/lines'
import { lineBreak } from './lineBreak'

export const ordered = (stringArray: Array<string>) =>
  lineBreak().concat(
    lines(stringArray.map((str, index) => prefix(`${index + 1}. `, str)))
  )
