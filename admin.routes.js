// متحكمات الإدارة

// لوحة التحكم الرئيسية
exports.getAdminDashboard = (req, res) => {
  res.json({ message: "لوحة الإدارة جاهزة" });
};

// جميع المستخدمين (مستقبلاً تربط مع قاعدة البيانات)
exports.getAllUsers = (req, res) => {
  res.json({ message: "قائمة المستخدمين" });
};

// جميع الطلبات
exports.getAllOrders = (req, res) => {
  res.json({ message: "قائمة الطلبات" });
};

// جميع المنتجات
exports.getAllProducts = (req, res) => {
  res.json({ message: "قائمة المنتجات" });
};
