import { wrap } from '../utils/wrap'
import { prefix } from '../utils/prefix'

export const code = (language: string, str: string) =>
  wrap('```', prefix(language, str))
