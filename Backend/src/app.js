const express = require('express');
const cors = require('cors');

const Order = require('./controllers/order.controller');


const app = express();
app.use(express.json());

app.use(cors());

app.get('/orders', Order.getAll);



module.exports = app;
