import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

class Api {
   static async register(user) {
        const userData = {...data,['state']: 'active'}
        const response = await axios.post(`${BASE_URL}/users/`, user);
        return response.data;
    }

    static async getAllUsers() {
        const users = await axios.get(`${BASE_URL}/users/`);
        console.log(users);
        console.log("called")
        return users.data;
    }

    static async getUser(id) {
        const user = await axios.get(`${BASE_URL}/users/${id}`);
        return user.data;
    }
}

export default Api;