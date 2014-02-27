var email = require('../index');
var assert = require('assert');

email.valid('somethiinggood@example.com', function(err, _email) {
  assert.equal(_email.user, 'somethiinggood');
  assert.equal(_email.domain, 'example.com');
});

email.valid('somethiinggo"od@example.com', function(err, _email) {
  assert.equal(typeof err, 'string');
  assert.equal(_email, null);
});