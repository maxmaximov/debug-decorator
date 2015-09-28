# debug-decorator [![Build Status](https://secure.travis-ci.org/maxmaximov/debug-decorator.svg?branch=master)](http://travis-ci.org/maxmaximov/debug-decorator)
The decorator for debugging es6 classes.

```bash
npm install --save-dev debug-decorator
```

### Babel
```js
import debug from 'debug-decorator';
...

@debug
class Cat extends Animal {
}
```

### Node.js:
```js
const debug = require('debug-decorator');
...

class Cat extends Animal {
}
debug(Cat);
```
