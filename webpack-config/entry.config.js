const path = require('path');
const dirVars = require('./base-config/dir.config.js');
const pathArr = require('./base-config/path.config.js');
const configEntry={};
pathArr.forEach((page) => {
  configEntry[page]=path.resolve(dirVars.entryDir,`${page}/entry.js`);
});
module.exports=configEntry;
