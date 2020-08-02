import React from 'react'
import { wrap } from '../utils'

type ItalicProps = {
  children: string
}

export const Italic: React.FC<ItalicProps> = ({ children }) => {
  return <>{wrap('*', children)}</>
}
