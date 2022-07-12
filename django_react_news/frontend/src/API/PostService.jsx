
import axios from 'axios';

export default class PostService {

    
    static async getAll() {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/news/')
        return response.data
    }

}