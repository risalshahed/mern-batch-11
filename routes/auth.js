import express from 'express';
import { forgetPassword, getProfile, login, register, resetPassword } from '../controller/authController.js';
import { protect } from '../middleware/authMiddleware.js';


/* 
x = y -> "y" er value amra "x" variable a STORE kori

*/

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.post('/forget-password', forgetPassword);
router.put('/reset-password/:resetToken', resetPassword);

export default router;