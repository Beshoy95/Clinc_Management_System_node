const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const employeeSchema = new mongoose.Schema({
  _id: { type: Number, alias: 'employeeId' },
  name: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  employeePhone: { type: Number, required: true },
  employeePassword: { type: String, required: true },
  confirmPassword: { type: String, required: false },
  employeeAddresses: [{ type: mongoose.Schema.Types.ObjectId }],
  image: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  role: { type: String, enum: ['Doctor', 'Receptions'], required: true },
});

employeeSchema.plugin(autoIncrement, { inc_field: 'employeeId' });
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
