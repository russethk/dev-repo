import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PokedexApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PokedexApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }


  /** Get list of pokemon  */

  static async getPokemon(name) {
    let res = await this.request("pokemon", {name});
    return res.pokemon;
  }

  /** Get list of pokemon by type. */

  static async getPokemonByType(type) {
    let res = await this.request("pokemon", {type});
    return res.pokemon;
  }
  


  /** Get details on a pokemon by id. */

  static async getPokemonByID(id) {
    let res = await this.request(`pokemon/${id}`);
    return res.pokemon;
  }
  


/** Add pokemon to pokedex 
   * post request to add pokemon to pokedex
   * add pokemon id, name, and type to pokemon table
*/

 static async catchPokemon(username, id) {
  await this.request(`users/${username}/pokemon/${id}`, {}, "post");
}

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

          
export default PokedexApi;
          



