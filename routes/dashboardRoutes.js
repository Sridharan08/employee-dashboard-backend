const express = require('express');
const { getStats } = require('../controllers/dashboardController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, getStats);

module.exports = router;