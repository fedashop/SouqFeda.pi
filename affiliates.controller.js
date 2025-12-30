const { affiliates } = require('../models/affiliates.model');

// إضافة مسوّق جديد
exports.createAffiliate = (req, res) => {
  const newAffiliate = {
    id: affiliates.length + 1,
    ...req.body
  };

  affiliates.push(newAffiliate);

  res.json({
    message: "تم تسجيل المسوّق بنجاح",
    affiliate: newAffiliate
};

// جلب جميع المسوّقين
exports.getAffiliates = (req, res) => {
  res.json(affiliates);
};
// توليد رابط خاص بالمسوّق
exports.getAffiliateLink = (req, res) => {
  const affiliateId = req.params.id;

  const link = `/product/:productId?ref=${affiliateId}`;

  res.json({
    message: "الرابط الخاص بالمسوّق",
    link
  });
};