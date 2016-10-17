# f-ck [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Clean-up cuss (`c*ss`, `c**s`, `@#$%`) words.

> Not affiliated with Football Club København.

## Installation

[npm][]:

```bash
npm install f-ck
```

## Usage

```js
var fck = require('f-ck');

console.log(fck('butt')); //=> 'b*tt'
console.log(fck.vowel('butt')); //=> 'b*tt'
console.log(fck.inner('butt')); //=> 'b**t'
console.log(fck.grawlix('butt')); //=> '@#$%'
console.log(fck.grawlix(7)); //=> '@#$%!&?'

console.log(fck('butt', '-')); //=> 'b-tt'
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

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/f-ck.svg

[travis]: https://travis-ci.org/wooorm/f-ck

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/f-ck.svg

[codecov]: https://codecov.io/github/wooorm/f-ck

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[grawlix]: https://en.wikipedia.org/wiki/The_Lexicon_of_Comicana
