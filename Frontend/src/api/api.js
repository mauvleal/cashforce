import axios from "axios";

async function api() {
  try {
    const url = `http://localhost:3001/`;
    const fetchApi = await axios.get(url);
    console.log(fetchApi.data)
    return fetchApi.data;
  } catch (error) {
    return { error };
  }
}

export default api;