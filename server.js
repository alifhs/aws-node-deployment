const express = require('express');

const app = express();


const port = process.env.port || 3000;

app.get('/', (req, res)=> {
    res.send('welcome from aws server');
})

app.get('/testobj', (req, res)=> {
    res.json({name: "bond", fullname: 'James Bond'})
})
app.listen(port, ()=> {
    console.log(`server runnning at ${port} `)
})