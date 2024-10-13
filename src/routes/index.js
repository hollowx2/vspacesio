const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Add other routes as needed
module.exports = router;
