'use strict';

/* Dependencies. */
var test = require('tape');
var fck = require('./');

/* Tests. */
test('fck', function (t) {
  t.test('.vowel', function (st) {
    st.equal(fck.vowel('butt'), 'b*tt');
    st.equal(fck.vowel('butt', '-'), 'b-tt');
    st.end();
  });

  t.test('.inner', function (st) {
    st.equal(fck.inner('butt'), 'b**t');
    st.equal(fck.inner('butt', '-'), 'b--t');
    st.equal(fck.inner('but'), 'b*t');
    st.equal(fck.inner('bu'), 'bu');
    st.equal(fck.inner('b'), 'b');
    st.equal(fck.inner(''), '');
    st.end();
  });

  t.test('.grawlix', function (st) {
    st.equal(fck.grawlix('butt'), '@#$%');
    st.equal(fck.grawlix(4), '@#$%');
    st.equal(fck.grawlix('buttb'), '@#$%!');
    st.equal(fck.grawlix('buttbu'), '@#$%!&');
    st.equal(fck.grawlix('buttbut'), '@#$%!&?');
    st.equal(fck.grawlix('buttbutt'), '@#$%!&?@');
    st.equal(fck.grawlix('buttbuttb'), '@#$%!&?@#');
    st.equal(fck.grawlix('but'), '@#$');
    st.equal(fck.grawlix('bu'), '@#');
    st.equal(fck.grawlix('b'), '@');
    st.equal(fck.grawlix(''), '');
    st.equal(fck.grawlix('butt', '*'), '****');
    st.equal(fck.grawlix('butt', '123'), '1231');
    st.end();
  });

  t.end();
});
