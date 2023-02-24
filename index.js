  const express = require('express');
  const studentRouter = require('./routers/studentRouter');
  const app = express();

  app.use(express.json());

  app.use('/api/students', studentRouter);



  app.get('/', (request, respond) => {
    respond.send("Hello Express js.....")
  });



const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...... `);
});