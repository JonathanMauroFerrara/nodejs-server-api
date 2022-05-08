//HTTP MODULE

const http = require('http');

const server = http.createServer((req, res) =>{
    //Routing
    if (req.url === "/about"){
        res.end('Welcome to About')
    }else if (req.url === "/contact"){
        res.end('Welcome to Contact')
    }else if (req.url === "/"){
        res.end('Welcome to Homepage')
    }else{
        res.end(`<h1>Error</h1>
        <p>Back to <a href="/">homepage!</a></p>`);
    }
})
server.listen(3000);