const { PROJECT_ROOT, package } = require("./lib/discoverProjectRoot");
console.log(PROJECT_ROOT);
// load schemas
let schemas = require("./lib/loadSchemas")(PROJECT_ROOT);
// const builtins = require("./components/lib/discoverBuiltins")(PROJECT_ROOT);
