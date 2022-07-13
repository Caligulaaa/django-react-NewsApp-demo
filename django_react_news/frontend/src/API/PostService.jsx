
import axios from 'axios';

export default class PostService {

    
    static async getAllNews() {
        const response = await axios.get('/api/v1/news/')
        return response.data.results
    }

    static async newsGetById(id) {
        const response = await axios.get('/api/v1/news/'+id)
        return response;
    }

}