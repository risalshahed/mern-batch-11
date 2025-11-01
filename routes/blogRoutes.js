import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createBlog, getBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.post('/', authMiddleware, createBlog);
router.get('/', getBlogs);

export default router;