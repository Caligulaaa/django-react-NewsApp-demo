
import axios from 'axios';

export default class PostService {

    
    static async getAllNews(page) {
        const response = await axios.get('/api/v1/news/'+`?page=${page}`)
        return response.data;
    }

    static async newsGetById(id) {
        const response = await axios.get('/api/v1/news/'+id)
        return response;
    }

    static async postLogin(username,password) {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/token/login/',{
            'username':username,
            'password':password
          })

          return response;
    }

    static async postNews(title,body,token) {
        const data = {
            title:title,
            body:body,
        };
        const axiosConfig = {
            headers:{
                'Authorization': `token ${token}`
            }
        };
        const response = await axios.post('http://127.0.0.1:8000/api/v1/news/',data,axiosConfig)
        return response;
    }

    static async getCommentByIdNews(newsId) {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/comments/news/' + newsId)
        
        return response;
    } 
    static async postCommentToNews(newsId,token,comment) {
        const data = {
            comment:comment,
        };
        const axiosConfig = {
            headers:{
                'Authorization': `token ${token}`
            }
        };
        const response = await axios.post('http://127.0.0.1:8000/api/v1/comments/news/' + newsId,data,axiosConfig)
        
        return response;
    }


    static async getNikname(newsId,token) {
        
    }
}