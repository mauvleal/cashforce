const userServices = require('../services/user.service');

const getUserById = async (req, res) => {
  try {
    const user = await userServices.getUserById(id);
    res.status(STATUS_OK).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Please, try again.')
  }
}

module.exports = {
  getUserById,
}