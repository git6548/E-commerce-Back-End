// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  //not totally sure if i use id or something else
  foreginKey: 'id',
  OnDelete: 'CASCADE'
});
// Categories have many Products
Category.hasMany(Product, {
  //not totally sure if i use id or something else
  foreginKey: 'id',
  onDelete: 'CASCADE'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
through: 'ProductTag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: 'ProductTag'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
