import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';


const New = ({match}) => {
    const newId = useParams();
    const [post,setPost] = useState({})
    
    const getPosts = async () => {
        const post = await PostService.newsGetById(newId.id)
        setPost(post.data)
    }

    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div>
            <h1>single new {newId.id} </h1>
                <div>
                    <h3>{post.title}</h3>
                    <br />
                    {post.body}

                </div>

            <div>
                <br />
                <hr />
                <br />
                commentar
            </div>

        </div>
    )
}

export default New