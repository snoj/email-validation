var email = require('../index');
var assert = require('assert');

//parsing good
var parsegood = email.parse("niceandsimple@example.com");
assert.equal(parsegood['user'], 'niceandsimple');
assert.equal(parsegood['domain'], 'example.com');

parsegood = email.parse('"@somethingsomething"@example.com');
assert.equal(parsegood['user'], '"@somethingsomething"');
assert.equal(parsegood['domain'], 'example.com');

//parsing bad
var parsebad = email.parse("badip@[827.750.304.001]");
assert.equal(parsebad, false);
assert.equal(typeof parsebad['user'], 'undefined');
assert.equal(typeof parsebad['domain'], 'undefined');

parsebad = email.parse("a@");
assert.equal(parsebad, false);
assert.equal(typeof parsebad['user'], 'undefined');
assert.equal(typeof parsebad['domain'], 'undefined');

//good
assert.ok(email.valid('email@example.com'));
assert.ok(email.valid('email@example'));
assert.ok(email.valid('email+sometag@example.com'));
assert.ok(email.valid('"@somethingsomething"@example.com'));
assert.equal(email.valid('"email@example.com'), false);
assert.ok(email.valid('one.two@one-two.com'));

//bad
assert.equal(email.valid('badip@[827.750.304.001]'), false);
assert.equal(email.valid('badip@[827.750.304.001'), false);
assert.equal(email.valid('bad@ThisHostAddressSpaceIsGreaterThanSixtyThreeCharactersLetsSeeHowManyICanFitInHereWithoutDestroyingTheWorld.com'), false);
assert.equal(email.valid('bad@ThisAddressIsGreaterThanTwoHundredAndFiftyThreeCharactersLetsSeeHowManyICanFitInHereWithoutDestroyingTheWorld.com.Unfortunatly.we.were.not.quite.there.yet.but.we.getting.closer.by.the.minute.I.assure.you.we.are.almost.there.dot.some.new.top.level.domain.com.us.tz.kosher'), false);
assert.equal(email.valid('one.two@-one-two.com'), false);
assert.equal(email.valid('a@'), false);

//shamelessly copied from http://en.wikipedia.org/wiki/Email_address
assert.ok(email.valid('niceandsimple@example.com'));
assert.ok(email.valid('very.common@example.com'));
assert.ok(email.valid('a.little.lengthy.but.fine@dept.example.com'));
assert.ok(email.valid('disposable.style.email.with+symbol@example.com'));
assert.ok(email.valid('user@[2001:db8:1ff::a0b:dbd0]'));
assert.ok(email.valid('"much.more unusual"@example.com'));
assert.ok(email.valid('"very.unusual.@.unusual.com"@example.com'));
assert.ok(email.valid('"very.(),:;<>[]\\".VERY.\\"very@\\\\ \\"very\\".unusual"@strange.example.com'));
assert.ok(email.valid('postbox@com'));
assert.ok(email.valid('admin@mailserver1'));
assert.ok(email.valid('!#$%&\'*+-/=?^_`{}|~@example.org'));
assert.ok(email.valid('"()<>[]:,;@\\"!#$%&\'*+-/=?^_`{}| ~.a"@example.org'));
assert.ok(email.valid('" "@example.org'));

assert.equal(email.valid("Abc.example.com"), false);
assert.equal(email.valid("A@b@c@example.com"), false);
assert.equal(email.valid('a"b(c)d,e:f;g<h>i[j\k]l@example.com'), false);
assert.equal(email.valid('just"not"right@example.com'), false);
assert.equal(email.valid('this is"not\allowed@example.com'), false);
assert.equal(email.valid('this\ still\"not\\allowed@example.com'), false);
