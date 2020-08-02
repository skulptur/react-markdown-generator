Markdown-fns provides composable primitives that make it easy to generate markdown strings programatically in Typescript.

## Motivation
I needed an easy way to generate documentation for my projects. Markdown is meant for humans to type, but isn't so good when you want to abstract certain patterns that often appear in documentation. With the functions provided by markdown-fns it is not only possible but also very easy to componentize documentation!

## Get started

Install

```bash
npm install --save markdown-fns
# or
yarn add markdown-fns
```

Use

```typescript
import { toUnit } from 'unit-fns';

console.log(toUnit(10)); // 1
```

[Examples](https://github.com/skulptur/unit-fns/tree/master/example)

## API
- Most functions receive and return numbers in the 0-1 range. Let's call a number that is in that range a Unit.
- Functions that can be pure, are pure.
- The argument order is optimized for partial application.
