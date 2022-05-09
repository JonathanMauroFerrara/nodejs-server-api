const express = require('express')
const app = express()
const {people} = require('./json_files/people');

/* app.use(express.static('public')); */

app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: __dirname + "/public"});
 })

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname + "/public"})
})

app.get('/contacts', (req, res) =>{
    res.sendFile('contacts.html', {root: __dirname + "/public"})
})

//get api and transform into json
app.get('/people', (req, res) =>{
    const newPerson = people.map((person) =>{
        const {name, surname, age} = person;
        return {name, surname};
    })
    res.json(newPerson);
})

//routing
app.get('/people/:id', (req, res) =>{
    const { id } = req.params;
    const singlePerson = people.find((person) => person.id === parseInt(id));
   /*  if(!singlePerson){
        return res.status(404).json({message: 'Person not found!', code: 404});
    } */
    res.json(singlePerson);
})

//query string
app.get('/search', (req, res) =>{
    const {query, limit} = req.query;
    let filteredPerson = [...people];
    if(query){
        filteredPerson = filteredPerson.filter((person) => {
            return person.name.startsWith(query);
        })
    }

    if(limit){
        filteredPerson = filteredPerson.slice(0, Number(limit));
    }

    if(filteredPerson < 1){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(filteredPerson);

})

//leave this ever at the bottom
app.all('*', (req,res)=>{
    res.sendFile('404.html', {root: __dirname + "/public"})
})



app.listen(5000)