import React from 'react'
import { useNavigate } from 'react-router-dom';
import PostService from '../API/PostService'
import PostForm from '../components/PostForm'

const NewPost = () => {
    const navigate = useNavigate();
    
    const getPost = async (newPost) =>{
        var token = localStorage.getItem('authToken')
        const addPost = await PostService.postNews(newPost.title,newPost.body,JSON.parse(token))

        if(addPost.status === 201){
            navigate('/news')
        }
    }
    return (
        <div>
            <PostForm create={getPost}/>
        </div>
    )
}

export default NewPost