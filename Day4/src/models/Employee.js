
let mongoose = require('mongoose');
let _ = require('lodash');

//setter method
let toLower = function(value) {
    return _.toLower(value);
}

//department validation
let departmentValidator = function(value) {
    return /delivery|marketing|testing/i.test(value);
  };

//Create Schema for employee
let employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true, set: toLower},
    lastName: {type: String, required: true, set: toLower},
    email: {type: String, unique: true, require: true},
    department: {type: String,
        require: true,
        set: toLower,
        validate: {
            validator: departmentValidator,
            message: props => `${props.value} is not valid department!`
        }},
    dob: {type: Date, require: true},
    doj: {type: Date, require: true, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});



const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;