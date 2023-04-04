  const express = require('express');
  const studentRouter = require('./routers/studentRouter');
  const app = express();
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/my_students-2')
   .then(()=> console.log("Connected to Mongodb!"))
   .catch(err => console.error(err._message));

  app.use(express.json());
  app.use('/api/students', studentRouter);


  app.get('/', (request, respond) => {
    respond.send("Hello Express js.....")
  });


  
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...... `);
});

// Mongoose --> Model ->Collection
// import Model;
// Connect Database


//Authentication -> Login
//User --> table/collection -> email, password

//Authorization--> Access to content/data