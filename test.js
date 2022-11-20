import assert from 'node:assert/strict'
import test from 'node:test'
import {vowel, inner, grawlix} from './index.js'

test('.vowel', () => {
  assert.equal(vowel('butt'), 'b*tt')
  assert.equal(vowel('butt', '-'), 'b-tt')
})

test('.inner', () => {
  assert.equal(inner('butt'), 'b**t')
  assert.equal(inner('butt', '-'), 'b--t')
  assert.equal(inner('but'), 'b*t')
  assert.equal(inner('bu'), 'bu')
  assert.equal(inner('b'), 'b')
  assert.equal(inner(''), '')
})

test('.grawlix', () => {
  assert.equal(grawlix('butt'), '@#$%')
  assert.equal(grawlix(4), '@#$%')
  assert.equal(grawlix('buttb'), '@#$%!')
  assert.equal(grawlix('buttbu'), '@#$%!&')
  assert.equal(grawlix('buttbut'), '@#$%!&?')
  assert.equal(grawlix('buttbutt'), '@#$%!&?@')
  assert.equal(grawlix('buttbuttb'), '@#$%!&?@#')
  assert.equal(grawlix('but'), '@#$')
  assert.equal(grawlix('bu'), '@#')
  assert.equal(grawlix('b'), '@')
  assert.equal(grawlix(''), '')
  assert.equal(grawlix('butt', '*'), '****')
  assert.equal(grawlix('butt', '123'), '1231')
})
