// streams

const {writeFileSync, readFileSync, createReadStream} = require('fs');

/* for (let i = 0; i < 1000; i++){
    writeFileSync('./test_files/test.txt', 'Hello there! General Kenobi!', {flag: 'a'});
} */

const stream = createReadStream('./test_files/test.txt');
stream.on('data', (result)=>{
    console.log(result);
})