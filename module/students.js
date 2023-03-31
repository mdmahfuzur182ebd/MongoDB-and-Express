const {Schema, model} = require('mongoose');

// const mongoose = require('mongoose');
// const studentsSchema = new mongoose.Schema({
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

// model.exports = mongoose.module('students', studentsSchema);


 const Student = model('Student', Schema({
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