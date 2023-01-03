const UserServices = require('../services/userServices');


const getUserById = async (req, res) => {
  try {
    const user = await UserServices.getUserById(req.params.id);
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};


module.exports = {
  getUserById,
}