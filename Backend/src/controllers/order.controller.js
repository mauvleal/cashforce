const OrderService = require('../services/order.service');

const getAll = async (_req, res) => {
  try {
    const orders = await OrderService.getAll();
    return res.status(200).json(orders);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};