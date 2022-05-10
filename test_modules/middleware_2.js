const middleware_2 = (req, res, next) =>{
    console.log("middleware 2 on action!")
    next()
}

module.exports = middleware_2;