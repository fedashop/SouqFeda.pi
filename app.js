const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// إعدادات وسطية
app.use(cors());
app.use(express.json());

// ربط قاعدة البيانات MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ربط المسارات
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/orders', require('./routes/orders.routes'));
app.use('/api/affiliates', require('./routes/affiliates.routes'));
app.use('/api/commissions', require('./routes/commissions.routes'));
app.use('/api/admin', require('./routes/admin.routes'));

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
