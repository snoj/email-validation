email-validation
================

Node.JS email validation that follows the specs.

## Usage
```
var email = require('email-validation');
assert.ok(email.valid("hi@mom.example.com"));

//get error messages!
assert.ok(email.valid("hi+spam@example.com", function(err) {
  if(err) console.log(err);
});

//Throw exceptions around!
try {
  assert.ok(email.valid("lol+this.is.fun@tld", true));
} catch (err) {
  console.log(err);
}
```

## License

(The MIT License)

Copyright (c) 2013 Josh Erickson &lt;josh@snoj.us&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
