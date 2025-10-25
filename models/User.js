import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Add a name kindly']
  },
  email: {
    type: String,
    required: [true, 'Add an email kindly'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Add a password kindly'],
    minLength: 6,
    // Don't Return the Password by default in Database Query
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExprire: Date
});

// vaia -> wbjb
// The_Imitation_Game

// Encrypt Password before saving
userSchema.pre('save', async function (next) {
  if( ! this.isModified('password' ) ) return next();
  /* else {
  let a;  variable declare
  a = 5;  value assign of the variable
  a = 8;  re-assign
  } */
  // else
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// Match user entered password to hashed/encrypted password in Database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.model('User', userSchema);