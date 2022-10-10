// Installing a specific version of npm globally
// npm i -g npm@5.5.1
// create package.json
// npm init
// install a package in a project, before u needed to put --save at the end
// npm i underscore

// Sematic Versioning
// "underscore": "^1.13.6" // Major.Minor.Patch
// Patches for bugs, minor for features that don't break the application
// ^ means any newer version in the same Major version could also write 1.x
// ~ means any newer version in the same Minor version also 1.13.x

// Check versions in each package.json of every dependency inside nodemodule
// or run       npm list also you can run npm list --depth=0
// Find info about package      npm view mongoose
// Find all versions about package      npm view mongoose versions
// Find all dependencies of a package     npm view mongoose dependencies

// npm i mongoose@5.0.0     install specific
// npm outdated  compare packages with latest version
// npm update    will update to latest version under the constrains we have
// npm i -g npm-check-updates      or    ncu   To update package.json to latest
// npm i      To install what is in package.json
// npm i jshint --save-dev    development only dependencies
// npm un mongoose     uninstall
// npm i -g npm            global not tied to specific folder/project
// npm -g outdated      check outadated global packages

// Publish a package
// npm register     if u dont have an account else do npm login
// npm publish   will upload your package

// Update package
// npm version minor    npm version major    npm version patch
// and then run npm publish
