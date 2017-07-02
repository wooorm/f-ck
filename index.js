'use strict';

var repeat = require('repeat-string');

module.exports = vowel;

vowel.vowel = vowel;
vowel.inner = inner;
vowel.grawlix = grawlix;

var floor = Math.floor;

var DEFAULT = '*';
var GRAWLIX = '@#$%!&?';
var VOWELS = /[aeiouy]/g;

/* `butt` > `b*tt` */
function vowel(value, character) {
  return value.replace(VOWELS, character || DEFAULT);
}

/* `butt` > `b**t` */
function inner(value, character) {
  if (value.length <= 2) {
    return value;
  }

  return value.charAt(0) +
    repeat(character || DEFAULT, value.length - 2) +
    value.charAt(value.length - 1);
}

/* `butt` > `@#$%` */
function grawlix(value, pattern) {
  var chars = pattern || GRAWLIX;
  var length = typeof value === 'number' ? value : value.length;
  var count = chars.length;
  return repeat(chars, floor(length / count)) + chars.slice(0, length % count);
}
