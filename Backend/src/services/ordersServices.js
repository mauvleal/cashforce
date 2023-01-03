const { Order, Buyer, Provider } = require('../database/models');

const getAllOrdersByUserId = async (id) => {
  const orders = await Order.findAll({
    where: { userid: id },
    include: [
      { model: Buyer, as: 'buyer' },
      { model: Provider, as: 'provider' }
    ]
  });

  return orders;
}

module.exports = {
  getAllOrdersByUserId,
};