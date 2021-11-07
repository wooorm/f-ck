# f-ck

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Clean-up cuss words.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`vowel(value[, character])`](#vowelvalue-character)
    *   [`inner(value[, character])`](#innervalue-character)
    *   [`grawlix(value[, pattern])`](#grawlixvalue-pattern)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package provides three ways to clean obscene strings: vowels (`c*ss`),
inner letters (`c**s`), and grawlix (`@#$%`).

> Not affiliated with Football Club København.

## When should I use this?

Maybe when you have some cuss words in your tests that you’re tired of looking
at?

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install f-ck
```

In Deno with [Skypack][]:

```js
import * as fck from 'https://cdn.skypack.dev/f-ck@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import * as fck from 'https://cdn.skypack.dev/f-ck@2?min'
</script>
```

## Use

```js
import {vowel, inner, grawlix} from 'f-ck'

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

Sanitize `value` (`string`) by replacing vowels in `value` with `character`
(`string`, default: `'*'`).

### `inner(value[, character])`

Sanitize `value` (`string`) by replacing all characters except the first and
last in `value` with `character` (`string`, default: `'*'`).

### `grawlix(value[, pattern])`

Sanitize `value` (`string` or `number`) using a [grawlix][] pattern (`string`,
default: `'@#$%!&?'`).
Essentially, repeats `pattern` for `value` (when `number`) or `value.length`
(when `string`) characters.

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`profanities`][profanities]
    — list of (possible) English profane words
*   [`cuss`][cuss]
    — map of English profane words to a rating of sureness

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[grawlix]: https://en.wikipedia.org/wiki/The_Lexicon_of_Comicana

[cuss]: https://github.com/words/cuss

[profanities]: https://github.com/words/profanities
