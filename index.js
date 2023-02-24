  const { json } = require('express');
  const express = require('express');
  const router = require('./router/studentRouter');
  const app = express();
  app.use(express.json());





  app.get('/', (request, respond) => {
    respond.send("Hello Express js.....")
  });


   app.route('/api/students')
   .get(studentList)
   .put(newStudent)


   app.route('/api/students/:id')
    .get(studentDetail)
    .put(studentUpdate)
    .delete(studentDelete)



  // app.get('/api/students', studentList);
  // app.post('/api/students', newStudent);


  // app.get('/api/students/:id',studentDetail );
  // app.put('/api/students/:id', studentUpdate);
  // app.delete('/api/students/:id', studentDelete);



const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...... `);
});