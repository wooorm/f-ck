import repeat from 'repeat-string'

// `butt` > `b*tt`
export function vowel(value, character) {
  return value.replace(/[aeiouy]/g, character || '*')
}

// `butt` > `b**t`
export function inner(value, character) {
  if (value.length <= 2) {
    return value
  }

  return (
    value.charAt(0) +
    repeat(character || '*', value.length - 2) +
    value.charAt(value.length - 1)
  )
}

// `butt` > `@#$%`
export function grawlix(value, pattern = '@#$%!&?') {
  var length = typeof value === 'number' ? value : value.length
  return (
    repeat(pattern, Math.floor(length / pattern.length)) +
    pattern.slice(0, length % pattern.length)
  )
}
