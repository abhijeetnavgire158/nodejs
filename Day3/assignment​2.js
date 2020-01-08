const Employee = require('./employeeModel.js');
let dotenv = require('dotenv').config();
let mongoose = require('mongoose');
let _ = require('lodash');

let action = _.isUndefined(process.argv[2]) ? 1 : process.argv[2]; //default action save data

//Connection option we can set
const option = {dbName: process.env.DATABASE_NAME, useNewUrlParser: true};
mongoose.connect(process.env.DB_CONNECTION_URL, option, function(error) {
    if (error) {
        return console.error('Unable to connect');
    }

    console.log('Connection Successfully done. 1 for new record , 2 for show the result (node assignment​2.js 2 krishna)');
    if (action == 1) {
        const newEmployee = new Employee({
            firstName: 'mukesh',
            lastName: 'ambani',
            email: 'mukeshambani4@gmail.com',
            department: 'Marketing',
            dob: new Date(1970, 5, 1),
        });

        // error = newEmployee.validateSync();
        let saveResult = newEmployee.save(function(error) {
            if (error) throw error;

            return console.log('Employee added successfully');
        });
        console.log(saveResult);
    } else if (action == 2) {
        let searchFName = process.argv[3]
        Employee.findOne({firstName: searchFName}, function(error, result) {
            if (error) throw error;

            return console.log(result);
        });
    } else if (action == 3) {
        // Employee.remove({"_id" : mongoose.Types.ObjectId(process.argv[3])}, function(error) {
        //     if (error) throw error;

        //     return console.log('Employee successfully deleted');
        // });

        Employee.findByIdAndRemove(mongoose.Types.ObjectId(process.argv[3]), function(error) {
            if (error) throw error;

            return console.log('Employee successfully deleted');
        });
    } else if (action == 4) {
        Employee.findOneAndUpdate(
            {"_id": mongoose.Types.ObjectId(process.argv[3])},
            {firstName: process.argv[4], lastName: process.argv[5]}, function(error) {
                if (error) throw error;
            }
        );
        console.log('Employee information updated successfully');
    }
});