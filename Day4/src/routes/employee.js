const express = require('express');

const router = express.Router();
var employee = require('../controllers/EmployeeController.js');

router.get('/', employee.list);
router.get('/:id', employee.show);

module.exports = router;