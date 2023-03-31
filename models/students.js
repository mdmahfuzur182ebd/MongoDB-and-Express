const {Schema} = require('mongoose');

// const  studentsSchema = Schema({
//     name: {type: String, require: true},
//     age:{type: Number, min: 0},
//     hobbies: {
//         type: Array,
//         of: String,
//         validate: {
//             validator: (value) => value.length > 0,
//             message: "There must be at least 1 hobby!!"
//         }
//     }
// });

 const Student = module('Student', Schema({
    name: {type: String, require: true},
    age:{type: Number, min: 0},
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: (value) => value.length > 0,
            message: "There must be at least 1 hobby!!"
        }
    }
}));

exports.Student = Student;