const moduleAlias = require("module-alias");
const path = require("path");

const unsafeMain = require.main as any;
console.log(unsafeMain.paths);
moduleAlias.addPath(path.resolve(""));

console.log("\nAfter addPath:\n");

console.log(unsafeMain.paths);
console.log("");

require("utils");
