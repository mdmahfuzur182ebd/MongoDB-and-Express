const express = require('express');
const { Student} = require('../module/students');
const router = express.Router();



  const studentList = async (req, res) => {
     try {
      const student = await Student.find()
     .sort({name:1});
      res.send(student);
     } catch (error) {
      return res.status(404).send("not find")
     }
  }

  const newStudent = async (req, res) => {

      const student = new Student(req.body)
      try {
         const result = await student.save();
         res.send(result);
      } catch (err) {
         const errMegs = [];
         for(field in err.errors){
            errMegs.push(err.errors[field].message);
         }
         return res.status(400).send(errMegs);
      }
        
  }

  const studentDetail = async (req,res)=> {
     const id = req.params.id;
     try{
       const student = await Student.findById(id);
       if(!student) return res.status(404).send("Id Not Found");
       res.send(student);
     }catch(err){
       return res.status(404).send("Id Not Found")
     }
  }


  const studentUpdate = async (req, res) => {
     const id = req.params.id;
     const updatedData = req.body;
     try {
        const student = await Student.findByIdAndUpdate(id, updatedData ,{new : true});
        
        if(!student) return res.status(404).send("Id Not Found");
       res.send(student);
     }catch(err){
       return res.status(404).send("Id Not Found")
     }
      
  }

  const studentDelete = async (req, res) => {
        const id = req.params.id;
        try {
            const student = await Student.findByIdAndDelete(id);
            if(!student) return res.status(404).send("Id Not Found");
            res.send(student);
         }catch(err){
            return res.status(404).send("Id Not Found")
       }
  }

   router.route('/')
   .get(studentList)
   .post(newStudent)


   router.route('/:id')
    .get(studentDetail)
    .put(studentUpdate)
    .delete(studentDelete)

module.exports = router;