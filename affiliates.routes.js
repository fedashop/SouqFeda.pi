const express = require('express');
const router = express.Router();

const { 
  createAffiliate, 
  getAffiliates, 
  getAffiliateLink 
} = require('../controllers/affiliates.controller');

router.post('/affiliates', createAffiliate);
router.get('/affiliates', getAffiliates);

// الرابط الخاص بالمسوّق
router.get('/affiliates/:id/link', getAffiliateLink);

module.exports = router;