# rollup-plugin-dts-issue

How to reproduce the issue:

* Clone this repo
* Run `yarn`
* Run `yarn build`
* Run `yarn build-dts`

Inspect the folder `dist`. The content of the `index.js` cjs module will be:

```javascript
'use strict';

function square(n) {
    return n * n;
}

module.exports = square;
```

The content of the `indx.d.ts` file will be:

```typescript
declare function square(n: number): number;

export { square as default };
```

So, the `output` options `format` and `exports` have been ignored in the [rollup.dts.config.js](https://github.com/elchininet/rollup-plugin-dts-issue/blob/master/rollup.dts.config.js#L8-L9) file.

This provokes that importing the module in `commonjs`, `TypeScript` expects a named `default`, check the `typescript-error.js` file to check what `TypeScript` says in the call to `square(3)`:

>This expression is not callable.
  Type 'typeof import("rollup-plugin-dts/dist/index")' has no call signatures.ts(2349)

Changing the first line to `const square = require('./dist').default;` solves the TypeScript error but then the code will fail because the module doesn‘t have any `default`, the function has been exported using `module.exports = square`.