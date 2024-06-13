const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'categories',
  });

  return Category;
};

module.exports = CategoryModel;