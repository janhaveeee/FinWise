const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { addTransaction } = require('../controllers/transactionController');

router.post('/', verifyToken, addTransaction);

module.exports = router;

