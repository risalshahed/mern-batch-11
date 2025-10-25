import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  /* 
  "Sakib Junior".split(' ') -> ['Sakib', 'Junior']
  
  */

  // Token from Authorization Header
  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if(!token) return res.status(401).json({ message: 'Not authorized, No Token' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(req);
    // console.log(req.user);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Not Authorized, Token Failed' })
  }
}