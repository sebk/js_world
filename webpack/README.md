Webpack
=======

* Webpack runs on Node.js
* While CommonJS was a great solution for Node.js projects, browsers didn't support modules, so bundlers and tools like Browserify, RequireJS and SystemJS were created, allowing us to write CommonJS modules that run in a browser.
* modules are becoming an official feature in the ECMAScript standard (but not perfect yet)
* webpack automatically build and infer your dependency graph based on what is imported and exported
* It's a tool that lets you bundle your JavaScript applications (supporting both ESM and CommonJS), and it can be extended to support many different assets such as images, fonts and stylesheets.

Getting Started: https://webpack.js.org/guides/getting-started/

**bundle**:
`npm run build`

**have a look**:
`open dist/index.html`