const middleware = (req, res, next) =>{
    const {method, url} = req;
    console.log(method, url);
    console.log("middleware used!")
    next()
}


module.exports = middleware;