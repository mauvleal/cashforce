const userServices = require('../services/userServices');
const { STATUS_OK } = require('../utils/statusConstants');

const getUserById = async (req, res) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    res.status(STATUS_OK).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Please try again.')
  }
}

module.exports = {
  getUserById,
}