  const { json } = require('express');
  const express = require('express');
  const app = express();
  const fs = require('fs');
  app.use(express.json());


  app.get('/', (request, respond) => {
    respond.send("Hello Express js.....")
  });

  app.get('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        // console.log(data);
         const students = JSON.parse(data).students;
         //console.log(student);
         res.send(students);
      })
  });

  app.post('/api/students', (req, res) => {
     const student = req.body;
     fs.readFile('./db.json', 'utf-8', (err, data) => {
       const students = JSON.parse(data);
       console.log(students);
       students.students.push(student);
       console.log(students);
       fs.writeFile('./db.json', JSON.stringify(students), (err) =>{
          res.send(student);
       });
     });
  })


const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...... `);
})