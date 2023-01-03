const orderServices = require('../services/ordersServices');
const {
  STATUS_OK,
  STATUS_SERVER_ERROR
} = require('../utils/statusConstants');

const getAllOrdersByUserId = async (req, res) => {
  try {
    const orders = await orderServices.getAllOrdersByUserId(req.params.id);
    res.status(STATUS_OK).json(orders);
  } catch (error) {
    console.log(error);
    res.status(STATUS_SERVER_ERROR).send('Please try again.');
  };
};

module.exports = {
  getAllOrdersByUserId,
};