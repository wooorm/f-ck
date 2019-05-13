# f-ck

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Clean-up [cuss][] (`c*ss`, `c**s`, `@#$%`) words.

> Not affiliated with Football Club København.

## Installation

[npm][]:

```bash
npm install f-ck
```

## Usage

```js
var fck = require('f-ck')

console.log(fck('butt')) // => 'b*tt'
console.log(fck.vowel('butt')) // => 'b*tt'
console.log(fck.inner('butt')) // => 'b**t'
console.log(fck.grawlix('butt')) // => '@#$%'
console.log(fck.grawlix(7)) // => '@#$%!&?'

console.log(fck('butt', '-')) // => 'b-tt'
```

## API

### `fck(value[, character])`

### `fck.vowel(value[, character])`

Sanitise `value` by replacing vowels in `value` with `character`
(default: `'*'`).

### `fck.inner(value[, character])`

Sanitise `value` by replacing all characters except the first and last
in `value` with `character` (default: `'*'`).

### `fck.grawlix(value[, pattern])`

Sanitise `value` using a [grawlix][] pattern (default: `'@#$%!&?'`).
Essentially, repeats `pattern` for `value` (when `number`) /
`value.length` (when `string`) characters.

## Related

*   [`profanities`][profanities]
    — List of (possible) English profane words
*   [`cuss`][cuss]
    — Map of English profane words to a rating of sureness

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/f-ck.svg

[build]: https://travis-ci.org/wooorm/f-ck

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
