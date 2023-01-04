const express = require('express');

const Order = require('../controllers/order.controller');

const router = express.Router();

const app = express();
app.use(express.json());

router.get('/orders', Order.getAll);

module.exports = router;