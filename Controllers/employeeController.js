const Employee = require('../Models/employeeSchema');
const { validationResult } = require('express-validator');

module.exports.getAllEmployees = async (req, res, next) => {
  try {
    if (req.params.id) {
      const employee = await Employee.findById(req.params.id);
      res.json(employee);
    } else {
      const employee = await Employee.find();
      res.json(employee);
    }
  } catch (err) {
    next('error find');
  }
};
