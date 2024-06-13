const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { BlogPost, PostCategory } = require('../models');

const createBlogPost = async ({ title, content, categoryIds, id }) => {
  const t = await sequelize.transaction({ autocommit: false });
  try {
    const newPost = await BlogPost.create({
      title, content, userId: id, updated: new Date(), published: new Date(),
    }, { transaction: t });
    await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
      postId: newPost.id,
      categoryId,
    })), { transaction: t });
    await t.commit();
    return newPost;
  } catch (error) {
    await t.rollback();
    return { status: 404, message: error.message };
  }
};

module.exports = {
  createBlogPost,
};