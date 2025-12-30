const express = require('express');
const app = express();
const cors = require('cors');

// إعدادات وسطية
app.use(cors());
app.use(express.json());

// ربط المسارات
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/orders', require('./routes/orders.routes'));
app.use('/api/affiliates', require('./routes/affiliates.routes'));
app.use('/api/commissions', require('./routes/commissions.routes'));
app.use('/api/admin', require('./routes/admin.routes'));

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});