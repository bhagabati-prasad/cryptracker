const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: [55, 'Limit exceeded'],
  },
  middleName: {
    type: String,
    maxlength: [55, 'Limit exceeded'],
  },
  lastName: {
    type: String,
    required: true,
    maxlength: [55, 'Limit exceeded'],
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, 'This email is already in use'],
    required: [true, 'Email address is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email',
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [4, 'Minimum password length is 4 character'],
  },
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('user', UserSchema);
