import test from 'tape'
import {vowel, inner, grawlix} from './index.js'

test('fck', (t) => {
  t.test('.vowel', (t) => {
    t.equal(vowel('butt'), 'b*tt')
    t.equal(vowel('butt', '-'), 'b-tt')
    t.end()
  })

  t.test('.inner', (t) => {
    t.equal(inner('butt'), 'b**t')
    t.equal(inner('butt', '-'), 'b--t')
    t.equal(inner('but'), 'b*t')
    t.equal(inner('bu'), 'bu')
    t.equal(inner('b'), 'b')
    t.equal(inner(''), '')
    t.end()
  })

  t.test('.grawlix', (t) => {
    t.equal(grawlix('butt'), '@#$%')
    t.equal(grawlix(4), '@#$%')
    t.equal(grawlix('buttb'), '@#$%!')
    t.equal(grawlix('buttbu'), '@#$%!&')
    t.equal(grawlix('buttbut'), '@#$%!&?')
    t.equal(grawlix('buttbutt'), '@#$%!&?@')
    t.equal(grawlix('buttbuttb'), '@#$%!&?@#')
    t.equal(grawlix('but'), '@#$')
    t.equal(grawlix('bu'), '@#')
    t.equal(grawlix('b'), '@')
    t.equal(grawlix(''), '')
    t.equal(grawlix('butt', '*'), '****')
    t.equal(grawlix('butt', '123'), '1231')
    t.end()
  })

  t.end()
})
