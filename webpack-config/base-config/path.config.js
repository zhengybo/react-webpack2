const glob = require('glob');
const dirVars = require('./dir.config.js');
let options = {
  cwd: dirVars.entryDir, // 在entry目录里找
  sync: true // 同步
};
let globInstance = new glob.Glob('!(_)*', options);
module.exports = globInstance.found;
