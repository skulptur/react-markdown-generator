import React from 'react'
import { times, always } from '../utils'

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: string
}

export const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  return (
    <>
      {times(always('#'), level)} {children}
    </>
  )
}
