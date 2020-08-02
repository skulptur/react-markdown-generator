import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Heading, Bold, Italic } from '../src/'
const ReactMarkdown = require('react-markdown')
import { times } from '../src/utils'

const App = () => {
  const preRef = React.useRef<HTMLPreElement | null>(null)
  const [markdownString, setMarkdownString] = React.useState<string>('')

  React.useEffect(() => {
    const pre = preRef.current!
    setMarkdownString(pre.innerText)
  }, [])

  return (
    <div>
      <pre ref={preRef}>
        {times(
          index => (
            <>
              <Heading key={index} level={index + 1}>
                Hello World
              </Heading>
              <br />
            </>
          ),
          5
        )}
        <br />
        Let's make some text <Bold>bold</Bold>.
        <br />
        <br />
        Let's make some text <Italic>italic</Italic>.
        <br />
      </pre>
      <ReactMarkdown source={markdownString} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
