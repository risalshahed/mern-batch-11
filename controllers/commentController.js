import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const { commentText, blogId } = req.body;

  const comment = await Comment.create({
    commentText,
    blog: blogId,
    user: req.user
  })
  res.json(comment);
}

export const getBlogWithComments = async (req, res) => {
  const { blogId } = req.params;
  const comments = await Comment.find(
    { blog: blogId }.populate('user', 'name')
  );

  res.json(comments);
}