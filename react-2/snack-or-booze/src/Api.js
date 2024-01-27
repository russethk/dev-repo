import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server gives CRUD endpoints on snacks and drinks.

  Refactored API call to async function to get both snacks and drinks data
*/

/* class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
}
*/

const SnackOrBoozeApi = {
  async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  },
  async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }
}

export default SnackOrBoozeApi;
