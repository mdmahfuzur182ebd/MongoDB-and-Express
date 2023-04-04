const express = require('express');
const {User} = require("../module/users");
const router = express.Router();

//Cheek user by email => error mag => save user
const newUser = async (req, res) =>{
    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send("User already Registered!");

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    
    try {
        const result = await user.save();
        res.send({
            name: result.name,
            email: result.email,
        });

    }catch (err) {
         const errMegs = [];
         for(field in err.errors){
            errMegs.push(err.errors[field].message);
         }
         return res.status(400).send(errMegs);
      }
}



router.route('/')
   .post(newUser)

module.exports = router;