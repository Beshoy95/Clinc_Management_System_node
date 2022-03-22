const router = require('express').Router();
const { getAllEmployees } = require('../Controllers/employeeController');

router
.route('/employee/:id?')
.get(getAllEmployees);

module.exports = router;
