// reference
// | parameter | type   | description |
// | --------- | ------ | ----------- |
// | `x`       | number |             |
// | `y`       | number |             |
// | `alpha`   | number |             |

const columnSeparator = '|'
const headerSeparator = '-'

export const table = (rows: Array<Array<string>>) => {
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

  return rowsWithHeader
    .map(columns => {
      return ['', ...columns, ''].join(columnSeparator)
    })
    .join('\n')
}
