//Express 
const { request, response, json } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();


app.get('/', (request, response)=>{
    response.send(JSON.stringify(["Karim", "Rahmna"]));
})

app.get('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        console.log(data);
        const student = JSON.parse(data).student
        res.send(student);
    } )
})

const port = 3000;

app.listen(port, () => {
    console.log("Listening on port 3000...... ");
})