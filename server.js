import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect the database
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Server Running on PORT', port);
})