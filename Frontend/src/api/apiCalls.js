import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', 
});

const getAllOrders = async (userid) => {
  const result = await api.get('/orders');
  return result;
}

const apiCalls = {
    getAllOrders,
  }

export default apiCalls;

