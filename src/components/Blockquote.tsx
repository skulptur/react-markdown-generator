import React from 'react'
import { wrap } from '../utils'

type BlockquoteProps = {
  children: string
}

export const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return (
    <>
      {'> '}
      {children}
    </>
  )
}
