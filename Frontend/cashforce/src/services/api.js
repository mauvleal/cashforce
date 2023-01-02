import axios from "axios";

async function api() {
  try {
    const url = `http://localhost:3000/`;
    const fetchApi = await axios.get(url);
    return fetchApi.data;
  } catch (error) {
    return { error };
  }
}

export default api;