/**
 * `butt` > `b*tt`
 *
 * @param {string} value
 * @param {string} [character='*']
 * @returns {string}
 */
export function vowel(value, character) {
  return value.replace(/[aeiouy]/g, character || '*')
}

/**
 * `butt` > `b**t`
 *
 * @param {string} value
 * @param {string} [character='*']
 * @returns {string}
 */
export function inner(value, character) {
  if (value.length <= 2) {
    return value
  }

  return (
    value.charAt(0) +
    (character || '*').repeat(value.length - 2) +
    value.charAt(value.length - 1)
  )
}

/**
 * `butt` > `@#$%`
 *
 * @param {number|string} value
 * @param {string} [pattern='@#$%!&?']
 * @returns {string}
 */
export function grawlix(value, pattern = '@#$%!&?') {
  const length = typeof value === 'number' ? value : value.length
  return (
    pattern.repeat(Math.floor(length / pattern.length)) +
    pattern.slice(0, length % pattern.length)
  )
}
