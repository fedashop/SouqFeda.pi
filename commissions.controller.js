const { commissions } = require('../models/commissions.model');

// إضافة عمولة جديدة
exports.addCommission = (req, res) => {
  const newCommission = {
    id: commissions.length + 1,
    affiliateId: req.body.affiliateId,
    orderId: req.body.orderId,
    amount: req.body.amount,
    date: new Date()
  };

  commissions.push(newCommission);

  res.json({
    message: "تم تسجيل العمولة بنجاح",
    commission: newCommission
  });
};

// جلب جميع العمولات
exports.getCommissions = (req, res) => {
  res.json(commissions);
};