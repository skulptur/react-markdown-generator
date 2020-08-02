## Motivation
Markdown is meant for humans to type, but isn't any good when you want to abstract certain patterns that often appear in documentation. With the functions provided by markdown-fns it is not only possible but also very easy to componentize documentation!

## Get started

Install

```bash
npm install --save markdown-fns
# or
yarn add markdown-fns
```

Use

```typescript
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
]) // => output below!
```

# This is a heading.
## This is a heading.
### This is a heading.
#### This is a heading.
##### This is a heading.
###### This is a heading.
This is regular text.

***Italic text.***

**Bold text.**

~~Strike through text.~~

This is regular text.

Text and `inline code`.

and then some more text.

0. Apples
1. Oranges
2. Bananas

* Apples
* Oranges
* Bananas

[example](https://github.com/skulptur/markdown-fns/tree/master/example)
