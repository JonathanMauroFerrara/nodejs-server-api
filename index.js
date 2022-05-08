const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send('Welcome to homepage')
})


app.get('/about', (req, res) => {
    res.send(`<h1>Welcome to About</h1>`)
})

app.get('/contacts', (req, res) =>{
    res.send(`<h1>Welcome to contacts</h1>`)
})

app.all('*', (req,res)=>{
    res.send(`<h1>404 Not Found</h1>`)
})


app.listen(5000)