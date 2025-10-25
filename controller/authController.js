import jwt from "jsonwebtoken"
import User from "../models/User.js";
import crypto from 'crypto';
import { sendEmail } from "../utils/sendEmail.js";

const generateToken = id => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  )
}

// REGISTER
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if(userExists) return res.status(400).json({ message: 'User already exists' });

    // else
    const user = await User.create({ name, email, password });

    // succesful data creation -> 201 status
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id)
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');

    if(!user) return res.status(400).json({ message: 'Invalid Credentials' })

    // else
    const isMatch = await user.matchPassword(password);

    if(!isMatch) return res.status(400).json({ message: 'Invalid Credentials' })

    // else
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get Profile
export const getProfile = async (req, res) => {
  res.json(req.user);
}

// Forget Password
export const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if(!user) return res.status(404).json({ message: 'User Not Found' });

    // Create Token to Reset Password
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    user.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex')

    // 10 * 60 * 1000 miliseconds, that means, 10 minutes
    user.resetPasswordExprire = Date.now() + 10 * 60 * 1000;

    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    const message = `Reset your password: \n\n ${resetUrl}`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset Token",
      message
    });

    res.json({ message: 'Email Sent' });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Reset Password
export const resetPassword = async (req, res) => {
  const resetPasswordToken = crypto
  .createHash('sha256')
  /* 
  console.log(req)
  console.log(req.params)
  console.log(req.params.resetToken)
  */
  .update(req.params.resetToken)
  .digest('hex')

  try {
    const user = await User.findOne({
      resetPasswordToken: resetPasswordToken,
      resetPasswordExprire: { $gt: Date.now() }
    });

    if(!user) return res.status(400).json({ message: 'Invalid or Expired Token' });

    // else
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExprire = undefined;

    await user.save();

    res.json({ message: 'Password Reset Succeful' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}