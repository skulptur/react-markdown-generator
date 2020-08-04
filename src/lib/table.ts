// reference
// | parameter | type   | description |
// | --------- | ------ | ----------- |
// | `x`       | number |             |
// | `y`       | number |             |
// | `alpha`   | number |             |

import { lineBreak } from './lineBreak'

const columnSeparator = '|'
const headerSeparator = '-'

export const table = (rows: Array<Array<string>>) => {
  //   TODO: format output
  //   const columnLengths = rows.reduce((lengths, column) => {
  //     return lengths.map(co)
  //   }, )

  const [header, ...content] = rows
  const rowsWithHeader: Array<Array<string>> = [
    header,
    header.map(heading =>
      heading
        .split('')
        .map(() => headerSeparator)
        .join('')
    ),
    ...content,
  ]

  return lineBreak().concat(
    rowsWithHeader
      .map(columns => {
        return ['', ...columns, ''].join(columnSeparator)
      })
      .join('\n')
  )
}
