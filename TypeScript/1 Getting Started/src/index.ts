// npm i -g typescript
// tsc -v
console.log("hello world");
let age: number = 20;

// Configure the TS compiler
// tsc --init
// go to tsconfig.json u can change esc version in target
// press ctrl+space to see ESC versions

// rootDir specifies where source files are should have a folder
// src, so this attribute should be "./src"

// outDir where the JS files are generated should have a folder "./dist"

 // For debug     "sourceMap": true,
 // Then rerun tsc a .js.map file will be generated
 // In VSC go to debugger "create launch.json file"
 // Choose node.js
 // In launch.json configure a new attribure below "program"
 // "preLaunchTask": "tsc: build - tsconfig.json",
if (age < 50)
    age += 10;
console.log(age);
// Start debug pressing play button in Launch Program
// can watch a variable by adding its name in Watch