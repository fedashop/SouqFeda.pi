const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/products.controller');

// إضافة منتج جديد
router.post('/products', createProduct);

// جلب جميع المنتجات
router.get('/products', getProducts);

// جلب منتج واحد + التقاط ref من الرابط
router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const affiliateId = req.query.ref || null;

  res.json({
    message: "تفاصيل المنتج",
    productId,
    affiliateId
  });
});

module.exports = router;