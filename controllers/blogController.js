import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  const { title, content } = req.body;
  // console.log(req);
  
  const blog = await Blog.create({
    title,
    content,
    author: req.user
  });

  res.json(blog);
}

export const getBlogs = async (req, res) => {
  // Don't Read the Password of the Author
  const blogs = await Blog.find().populate('author', 'name email');
  res.json(blogs);
}