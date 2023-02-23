//Express 
const { request, response, json } = require('express');
const express = require('express');
const app = express();

// console.log(app);
// app.get();
// app.post()
// app.put()
// app.patch()
// app.delete()
// app.on()
// app.emit()

app.get('/', (request, response) => {
    response.send("Hello from express js..")
});

app.get('/some', (request, response) => {
    response.send("Another Link.....")
});

app.get("/student", (request, response) => {
    response.send('<h1>Hello Something</h1>');
})

app.get('/auto', (request, response)=>{
    response.send(JSON.stringify(["Karim", "Rahmna"]));
})

const port = 3000;

app.listen(port, () => {
    console.log("Listening on port 3000...... ");
})