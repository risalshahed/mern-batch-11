import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // encrypt the password
  const encryptedPassword = await bcrypt.hash(password, 10)
  
  await User.create({
    /* name: name,
    email: email, */
    // Shorthand Property
    name,
    email,
    password: encryptedPassword
  })

  res.json({ message: 'User Registered' })
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(!user) return res.json({ message: 'User Not Found' });
  
  // else
  const match = bcrypt.compare(password, user.password);
  if(!match) return res.json({ message: 'Wrong Password' });

  const token = jwt.sign(
    {
      userId: user._id
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: 'Login Success',
    token
  });
}