/* eslint-env browser */

import {ok as assert} from 'devlop'
import * as fck from 'f-ck'

const input = document.querySelector('input')
const output = document.querySelector('output')
const select = document.querySelector('select')
assert(input)
assert(select)

change()

input.addEventListener('input', change)
select.addEventListener('change', change)

function change() {
  assert(input)
  assert(output)
  assert(select)
  const name = select.selectedOptions[0].textContent
  assert(name === 'grawlix' || name === 'inner' || name === 'vowel')
  output.value = fck[name](input.value)
}
