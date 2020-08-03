import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
const ReactMarkdown = require('react-markdown')
import {
  bold,
  heading,
  inlineCode,
  italic,
  lines,
  link,
  ordered,
  spaces,
  strike,
  times,
  unordered,
} from '../src'

const exampleUrl =
  'https://github.com/skulptur/markdown-fns/tree/master/example'
const fruits = ['Apples', 'Oranges', 'Bananas']

const markdown = lines([
  lines(times(index => heading(index + 1, 'This is a heading.'), 6)),
  'This is regular text.',
  italic('Italic text.'),
  bold('Bold text.'),
  strike('Strike through text.'),
  lines([
    'More regular text.',
    spaces(['Text and', inlineCode('inline code'), '.']),
    'and then some more text.',
  ]),
  ordered(fruits),
  unordered(fruits),
  link('example', exampleUrl),
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
