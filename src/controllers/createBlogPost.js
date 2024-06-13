const { BlogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  try {
    const blogPost = await BlogPostService
      .createBlogPost({ title, content, categoryIds, id });
    return res.status(201).json(blogPost);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createBlogPost,
};