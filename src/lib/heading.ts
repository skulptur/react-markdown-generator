import { times } from '../utils/times'
import { always } from '../utils/always'
import { spaces } from '../utils/spaces'
import { join } from '../utils/join'

// TODO: clamp 1 - 6
export const heading = (level: number, str: string) =>
  spaces([join(times(always('#'), level)), str])
