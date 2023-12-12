import axios from "axios";

class DataService {
    URL = 'https://jsonplaceholder.typicode.com/todos/';

    async getById(id) {
        return axios.get(this.URL + id);
    }
}

export default new DataService();