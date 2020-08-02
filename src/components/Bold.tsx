import React from 'react'
import { wrap } from '../utils'

type BoldProps = {
  children: string
}

export const Bold: React.FC<BoldProps> = ({ children }) => {
  return <>{wrap('**', children)}</>
}
