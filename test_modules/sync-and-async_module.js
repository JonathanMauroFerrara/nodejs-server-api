//sync and async

const {readFileSync, writeFileSync} = require('fs');

//read file sync
const testReadFileSync = readFileSync('./test_files/test.txt', 'utf8');
console.log(testReadFileSync);

//write file and concat sync
writeFileSync('./test_files/createByFunction.txt', 'rewrite file', {flag: 'a'}); */

//Async
const {readFile, writeFile} = require('fs');

const testReadFileAsync = readFile('./test_files/createByFunction.txt','utf8', (error, result)=>{
    console.log(result);
    console.log(error);
});
