const express = require('express');

const Order = require('./controllers/order.controller');


const app = express();
app.use(express.json());

app.get('/orders', Order.getAll);

module.exports = app;
