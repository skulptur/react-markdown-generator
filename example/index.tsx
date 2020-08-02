import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
const ReactMarkdown = require('react-markdown')
import {
  bold,
  code,
  heading,
  image,
  inlineCode,
  italic,
  link,
  quote,
  strike,
  always,
  join,
  joinWith,
  prefix,
  postfix,
  spaces,
  lines,
  times,
  wrap,
  ordered,
  unordered,
} from '../src'

const markdown = lines([
  lines(times(index => heading(index + 1, 'This is a heading.'), 6)),
  'This is regular text.',
  italic('Italic text.'),
  bold('Bold text.'),
  strike('Strike through text.'),
  joinWith('\n\n', [
    'This is regular text.',
    spaces(['Text and', inlineCode('inline code'), '.']),
    'and then some more text.',
  ]),
  ordered(['Apples', 'Oranges', 'Bananas']),
])

const App = () => {
  const preRef = React.useRef<HTMLPreElement | null>(null)

  return (
    <div>
      <pre ref={preRef}>{markdown}</pre>
      <ReactMarkdown source={markdown} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
