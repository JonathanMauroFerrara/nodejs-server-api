//path:

const path = require('path');
const folderPath = path.join('./test_files', 'test.txt') */

//absolute path:

const absolutePath = require('path');
console.log(absolutePath.resolve(__dirname,'test_files', 'test.txt'));