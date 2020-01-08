const mongoose = require('mongoose');

const Employee = require('../models/Employee.js');

const employeeController = {};

employeeController.list = function(req, res) {
    // res.render('../views/employees/list');
    // return false;
    Employee.find({}).exec(function(err, employees) {
        if (err) throw err;
        console.log(employees);
        res.render('../views/employees/list', {title: 'Employees List', employees: employees});
    });
};

//Show particular employee information
employeeController.show = function(req, res) {
    Employee.findOne({"_id": req.params.id}).exec(function(err, employee) {
        if (err) throw err;

        res.render('../views/employees/show', {title: 'Employee Info', employee: employee});
    });
};

module.exports = {
    list: employeeController.list,
    show: employeeController.show
};
