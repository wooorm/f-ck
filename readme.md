# f-ck

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Clean-up [cuss][] (`c*ss`, `c**s`, `@#$%`) words.

> Not affiliated with Football Club København.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install f-ck
```

## Use

```js
import {vowel, inner, grawlix} = require('f-ck')

console.log(vowel('butt')) // => 'b*tt'
console.log(inner('butt')) // => 'b**t'
console.log(grawlix('butt')) // => '@#$%'
console.log(grawlix(7)) // => '@#$%!&?'

console.log(vowel('butt', '-')) // => 'b-tt'
```

## API

This package exports the following identifiers: `vowel`, `inner`, and `grawlix`.
There is no default export.

### `vowel(value[, character])`

Sanitize `value` by replacing vowels in `value` with `character` (default:
`'*'`).

### `inner(value[, character])`

Sanitize `value` by replacing all characters except the first and last in
`value` with `character` (default: `'*'`).

### `grawlix(value[, pattern])`

Sanitize `value` using a [grawlix][] pattern (default: `'@#$%!&?'`).
Essentially, repeats `pattern` for `value` (when `number`) or `value.length`
(when `string`) characters.

## Related

*   [`profanities`][profanities]
    — List of (possible) English profane words
*   [`cuss`][cuss]
    — Map of English profane words to a rating of sureness

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/f-ck/workflows/main/badge.svg

[build]: https://github.com/wooorm/f-ck/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/f-ck.svg

[coverage]: https://codecov.io/github/wooorm/f-ck

[downloads-badge]: https://img.shields.io/npm/dm/f-ck.svg

[downloads]: https://www.npmjs.com/package/f-ck

[size-badge]: https://img.shields.io/bundlephobia/minzip/f-ck.svg

[size]: https://bundlephobia.com/result?p=f-ck

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[grawlix]: https://en.wikipedia.org/wiki/The_Lexicon_of_Comicana

[cuss]: https://github.com/words/cuss

[profanities]: https://github.com/words/profanities
