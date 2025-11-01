import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addComment, getBlogWithComments } from "../controllers/commentController.js";

const router = express.Router();

router.post('/', authMiddleware, addComment);
router.get('/:blogId', getBlogWithComments);

export default router;