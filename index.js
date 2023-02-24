  const { json } = require('express');
  const express = require('express');
  const db = require('./db');
  const app = express();
  app.use(express.json());



  const studentList = (req, res) => {
     db.getDbStudent()
     .then(students => {
       res.send(students);
     });
  }

  const newStudent =  (req, res) => {
      const student = req.body;
        db.getDbStudent()
        .then(students => {
            students.push(student);
            console.log(students);
            db.insertDbStudent(students)
            .then(data =>{
               res.send(student);
            });
       });
  }

  const studentDetail = (req,res)=> {
     const id = parseInt(req.params.id);
     db.getDbStudent()
     .then(students => {
        const student = students.find(s => s.id === id);
        if(!student) res.status(404).send("No student found with this id");
        else res.send(student);
     });
  }


  const studentUpdate = (req, res) => {
     const id = parseInt(req.params.id);
     const updatedData = req.body;
      db.getDbStudent()
      .then(students => {
          const student = students.find(s => s.id === id);
          if(!student) res.status(404).send("No student found with this id");
          else {
            const i = students.findIndex(s => s.id === id);
            students[i] = updatedData;
            db.insertDbStudent(students)
            .then(msg => res.send(updatedData))
          }
      });
  }

  const studentDelete = (req, res) => {
        const id = parseInt(req.params.id);
        db.getDbStudent()
        .then(students => {
            const student = students.find(s => s.id === id);
            if(!student) res.status(404).send("No student found with this id");
            else {
              const updatedStudent = students.filter( s => s.id !== id);
              //console.log(updatedStudent);
              db.insertDbStudent(updatedStudent)
               .then(msg => res.send(student));
            }
        });
  }



  app.get('/', (request, respond) => {
    respond.send("Hello Express js.....")
  });

  app.get('/api/students', studentList);

  app.post('/api/students', newStudent);

  app.get('/api/students/:id',studentDetail );

  app.put('/api/students/:id', studentUpdate);

  app.delete('/api/students/:id', studentDelete);



const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...... `);
});