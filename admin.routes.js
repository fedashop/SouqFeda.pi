const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
  res.json({ message: "admin جاهز" });
});

module.exports = router;