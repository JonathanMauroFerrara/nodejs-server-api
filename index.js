const express = require('express')
const app = express()
const {people} = require('./json_files/people');
const middleware = require ('./test_modules/middleware');
const middleware_2 = require ('./test_modules/middleware_2');

/* app.use(express.static('public')); */

//middleware used for show json response
app.use(express.json());


//use middleware on every route
/* app.use(middleware); */

//use middleware on single rout
/* app.use('/about', middleware); */

//use multi middleware functionzr
/* app.use([middleware, middleware_2,]) */


app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: __dirname + "/public"});
 })

app.get('/about',(req, res) => {
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

//API GET
app.get('/api/people', (req,res)=>{
    res.status(200).json({data: people});
})
//API GET Single person
app.get('/api/people/:id', (req,res) =>{
    const { id } = req.params;

    const filteredPeople = people.find((person) => person.id === Number(id));
    res.json(filteredPeople);
})

//API POST
app.post('/api/people', (req, res) =>{
    console.log(req.body);
    const newPerson = req.body;
    people.push(newPerson);
    res.status(200).send({data: people})
})

//API PUT
app.put('/api/people/:id', (req, res) =>{
    console.log(req.body);
    const { id } = req.params
    const editPerson = req.body;
    people[Number(id) - 1] = editPerson;
    res.status(200).send({data: people})
})


//API DELETE
app.delete('/api/people/:id', (req, res) =>{
    console.log(req.body);
    const { id } = req.params
    const index = people.findIndex(person => people.id === id)
    people.splice(index, 1);
    res.status(200).send({data: people})
})

//leave this ever at the bottom
app.all('*', (req,res)=>{
    res.sendFile('404.html', {root: __dirname + "/public"})
})




app.listen(5000)