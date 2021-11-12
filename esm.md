# ESM

## General

https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/
* ECMAScript modules (ES modules or ESM)
* CommonJS modules are not officially part of the JavaScript language specification
* ESM seeking to unify and standardize how modules are loaded 
* ESM is asynchronously loaded, while CommonJS is synchronous
* ESM can do top-level await, but CJS scripts can't (us use the await keyword outside of an async function, at the “top level.”)

## Enable

* **ESM uses `import` and `export`**
* Node.js will treate `.mjs` files as ESM modules
  * and `.js` files as whatever the default module system is set
  * default CommonJS unless __package.json__ says `"type": "module"` 
* We can only have one default module exported per file

```javascript
import React, {Fragment} from 'react';
export default React;
export const Fragment = … ;
```

* In Node 14, there are now two kinds of scripts: there are old-style CommonJS (CJS) scripts and new-style ESM scripts (aka MJS)
* Activate ESM:
  * name files `.mjs`
  * or set `"type": "module"` in package.json
* Calling CJS from ESM and vice versa is possible, but it’s a hassle => https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1

[CommonJS to ES Modules](https://electerious.medium.com/from-commonjs-to-es-modules-how-to-modernize-your-node-js-app-ad8cdd4fb662)

## mjs

* indicates an ES6 module file (https://stackoverflow.com/a/57492606)
* The js vs. mjs distinction is necessary for the JavaScript engine to know if it’s dealing with a module or a script.
* If you get a CommonJS script, you’re not allowed to use `import from` in it (just `require`)
* you cannot use `require` in a `.mjs` file
* `.mjs` files are written in JavaScript, and may also use the `.js` extension outside of the Node.js context.