/* eslint-env browser */

import * as fck from 'f-ck'

const input = document.querySelector('input')
const output = document.querySelector('output')
const select = document.querySelector('select')

change()

input.addEventListener('input', change)
select.addEventListener('change', change)

function change() {
  const fn = select.selectedOptions[0].textContent
  output.value = fck[fn](input.value)
}
