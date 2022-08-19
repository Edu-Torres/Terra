"use strict";
// npm i -g typescript
// tsc -v
console.log("hello world");
let age = 20;
// Configure the TS compiler
// tsc --init
// go to tsconfig.json u can change esc version in target
// press ctrl+space to see ESC versions
// rootDir specifies where source files are should have a folder
// src, so this attribute should be "./src"
// outDir where the JS files are generated should have a folder "./dist"
// For debug     "sourceMap": true,
if (age < 50)
    age += 10;
console.log(age);
//# sourceMappingURL=index.js.map