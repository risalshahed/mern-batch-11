import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import express from 'express'
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.js'


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Route Middleware
app.use('/api/auth', authRoutes);

// Error Handler
app.use((err, _req, res, next) => {
  res.status(500).json({ message: err.message })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is Listening on Port: ${PORT}`));