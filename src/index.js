/* eslint-env browser */

var fck = require('f-ck')

var input = document.querySelector('input')
var output = document.querySelector('output')
var select = document.querySelector('select')

change()

input.addEventListener('input', change)
select.addEventListener('change', change)

function change() {
  var fn = select.selectedOptions[0].textContent
  output.value = fck[fn](input.value)
}
