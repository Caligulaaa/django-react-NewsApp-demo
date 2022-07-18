import React from 'react'
import { useState } from 'react'
import PostService from '../API/PostService'
import { useParams } from 'react-router-dom'


const PostComment = ({create}) => {
    const [comment, setComment] = useState({comment:''})
    const newId = useParams();

    
    const addNewComment = async (e) =>{
        e.preventDefault()
        var token = localStorage.getItem('authToken')
        const newComment = {
            ...comment
        }
        const response = await PostService.postCommentToNews(newId.id,JSON.parse(token),newComment.comment)

        if(response.status === 201){

            create(newComment)
            setComment({comment:''})
        }
        
    }

  return (
    <form>
        <input 
            type='text'
            placeholder='comment'
            onChange={e => setComment({...comment,comment:e.target.value})}
            />
        <button onClick={addNewComment}>add comment</button>
    </form>
  )
}

export default PostComment