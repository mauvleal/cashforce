const { Order } = require('../models');

const getAll = async () => {
  const orders = await Order.findAll();

  return orders;
}

module.exports = {
  getAll,
};