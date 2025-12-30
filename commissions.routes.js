const express = require('express');
const router = express.Router();
const { addCommission, getCommissions } = require('../controllers/commissions.controller');

router.post('/commissions', addCommission);
router.get('/commissions', getCommissions);

module.exports = router;