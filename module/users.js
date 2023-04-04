const {Schema, model} = require("mongoose");

const userSchema = Schema({
     name: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 100,
     },
     email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true,
     },
     password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
     },
});

const User = model('User', userSchema);
module.exports.User = User;

//  const User = model('User', Schema({
//       name: {
//         type: String, 
//         required: true, 
//         minlength: 5,
//         max_length: 100,
//      },
//      email: {
//         type: String,
//         required: true,
//         max_length: 255,
//         unique: true,
//      },
//      password: {
//         type: String,
//         required: true,
//         minlength: 5,
//         max_length: 1024,
//      }
// }));

// exports.User = User;