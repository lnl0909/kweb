const path = require('path');
const myFile = '/Users/nara/Desktop/study/24-2/kweb/10:2/circuler.js';
const dirname = path.dirname(myFile);
const basename = path.basename(myFile);
const extname = path.extname(myFile);
console.log(`path.dirname = ${dirname}`);
console.log(`path.basename = ${basename}`);
console.log(`path.extname = ${extname}`);