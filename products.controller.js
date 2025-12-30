const { products } = require('../models/product.model');

// إضافة منتج جديد
exports.createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };

  products.push(newProduct);

  res.json({
    message: "تم إضافة المنتج بنجاح",
    product: newProduct
  });
};

// جلب جميع المنتجات
exports.getProducts = (req, res) => {
  res.json(products);
};