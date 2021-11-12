esbuild
=======
https://dev.to/zaydek/what-is-esbuild-2ofc

* You can use esbuild to quickly link your JavaScript (js, jsx, ts, and tsx) and CSS dependencies as deployable assets for the web
* You can bundle or code-split your JavaScript and CSS sources

## Getting Started

https://esbuild.github.io/getting-started/#install-esbuild

```shell
npm install esbuild
esbuild app.jsx --bundle --outfile=out.js
```

out.js containing your code and the React library bundled together. The code is completely self-contained and no longer depends on your node_modules directory. If

=> [Bundling for the browser](https://esbuild.github.io/getting-started/#bundling-for-the-browser)

=> [Bundling for node](https://esbuild.github.io/getting-started/#bundling-for-node)