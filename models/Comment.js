import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentText: String,
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default mongoose.model('Comment', commentSchema);