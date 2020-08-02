import React from 'react'
import { wrap } from '../utils'

type BoldItalicProps = {
  children: string
}

export const BoldItalic: React.FC<BoldItalicProps> = ({ children }) => {
  return <>{wrap('***', children)}</>
}
