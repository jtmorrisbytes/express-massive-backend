const { PROJECT_ROOT, package } = require("./discoverProjectRoot");
console.log(PROJECT_ROOT);
const builtins = require("./discoverBuiltins")(PROJECT_ROOT);
