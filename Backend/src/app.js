const express = require('express');
const cors = require('cors');

const Order = require('./controllers/order.controller');
const User = require('./controllers/user.controller');


const app = express();
app.use(express.json());

app.use(cors());

app.get('/orders', Order.getAll);
app.get('/user/:id', User.getUserById);


module.exports = app;
