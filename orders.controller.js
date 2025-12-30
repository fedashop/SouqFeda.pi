const { orders } = require('../models/order.model');
const { commissions } = require('../models/commissions.model');

// إنشاء طلب جديد
exports.createOrder = (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    ...req.body
  };

  orders.push(newOrder);

  // حساب العمولة إذا كان affiliateId موجود
  if (newOrder.affiliateId && newOrder.total) {
    const commissionAmount = newOrder.total * 0.10; // 10% عمولة

    commissions.push({
      id: commissions.length + 1,
      affiliateId: newOrder.affiliateId,
      orderId: newOrder.id,
      amount: commissionAmount,
      date: new Date()
    });
  }

  res.json({
    message: "تم إنشاء الطلب بنجاح",
    order: newOrder
  });
};