'use strict'

var test = require('tape')
var fck = require('.')

test('fck', function (t) {
  t.test('.vowel', function (t) {
    t.equal(fck.vowel('butt'), 'b*tt')
    t.equal(fck.vowel('butt', '-'), 'b-tt')
    t.end()
  })

  t.test('.inner', function (t) {
    t.equal(fck.inner('butt'), 'b**t')
    t.equal(fck.inner('butt', '-'), 'b--t')
    t.equal(fck.inner('but'), 'b*t')
    t.equal(fck.inner('bu'), 'bu')
    t.equal(fck.inner('b'), 'b')
    t.equal(fck.inner(''), '')
    t.end()
  })

  t.test('.grawlix', function (t) {
    t.equal(fck.grawlix('butt'), '@#$%')
    t.equal(fck.grawlix(4), '@#$%')
    t.equal(fck.grawlix('buttb'), '@#$%!')
    t.equal(fck.grawlix('buttbu'), '@#$%!&')
    t.equal(fck.grawlix('buttbut'), '@#$%!&?')
    t.equal(fck.grawlix('buttbutt'), '@#$%!&?@')
    t.equal(fck.grawlix('buttbuttb'), '@#$%!&?@#')
    t.equal(fck.grawlix('but'), '@#$')
    t.equal(fck.grawlix('bu'), '@#')
    t.equal(fck.grawlix('b'), '@')
    t.equal(fck.grawlix(''), '')
    t.equal(fck.grawlix('butt', '*'), '****')
    t.equal(fck.grawlix('butt', '123'), '1231')
    t.end()
  })

  t.end()
})
