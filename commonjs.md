# CommonJS

https://de.ryte.com/wiki/CommonJS
* extension of JS, that enables usage of JS outside of the browser (makes JS usable in different environments)
* aims to provide a JS extension, with modules, libraries and APIs for e.g. Webservices

https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch11s03.html
* CommonJS modules: reusable piece of JS with exports
* `exports`: contains the objects our module wants to export
* `require`: our module imports other modules (loading another module)
* Node supports/uses CommonJS

https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46
* is a module formatting system
* Modules are loaded synchronously

https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
* JS didn't have a native way of organizing code before the ES2015 standard
* The module loading mechanism in Node.js is caching the modules on the first require call. Every time you use require('awesome-module') you will get the same instance of awesome-module, which ensures that the modules are singleton-like and have the same state across your application.

https://flaviocopes.com/commonjs/
* This system was born with server-side JavaScript in mind, and is not suitable for the client-side (this is why ES Modules were introduced).
* A JavaScript file is a module when it exports one or more of the symbols it defines


* **CommonJS uses `require` and `module.exports`**
* Node.js will treat `.cjs` files as CommonJS modules

Examples:
```javascript
const logger = require('logger');
const logDebug = () => {
    logger.debug('nothing to see here');
}
// Here we export a public `logDebug` that other modules can use
exports.logDebug = logDebug;

// You can also export a function as the entire module using module.exports:
module.exports = logDebug;
```

https://stackify.com/node-js-module-exports/

```javascript
// because of fat arrrow function, the functions are anonymous
module.exports.getUser = () => {
    // Code here
}
module.exports.getUsers = () => {
    // Code here
}
```

```javascript
// non anynomous functions
function getUser() { // Code here }

function getUsers() { // Code here }

module.exports = {
    getUser,
    getUsers
}
```


* when you have a module that exports just the one thing, **it’s more common** to use module.exports ([source](https://www.sitepoint.com/understanding-module-exports-exports-node-js/))
* When implementing a module for other people to use, we can define exports, either **"named exports"** by setting `module.exports.foo = 'bar'` or a **"default export"** by setting `module.exports = 'baz'` ([source](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)).

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  getUserStats() {
    return `Name: ${this.name}`;
  }
}
module.exports = User;

// in index.js (or somewhere else):
const User = require('./user');
const jim = new User('Jim');
console.log(jim.getUserStats());
```

## Difference `module.exports` vs `exports`

https://www.hacksparrow.com/nodejs/exports-vs-module-exports.html
* module has an exports property
* Assigning properties to exports also adds them to module.exports (exports is a reference to modules.exports)
* As module.exports and exports both point to the same object, it doesn’t normally matter which you use
* If you assign anything to `module.exports`, `exports` is no longer a reference to it, and exports loses all its power.

```javascript
console.log(module);

Module {
    id: '.', 
    exports: {},
    parent: null,
        filename: '/home/jim/Desktop/index.js',
        loaded: false,
        children: [],
        paths: [ '/home/jim/Desktop/node_modules',
        '/home/jim/node_modules'] }
```
