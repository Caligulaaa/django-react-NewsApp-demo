import React, { useEffect, useState,useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import PostComment from '../components/PostComment';


const New = ({match}) => {
    const newId = useParams();
    const [post,setPost] = useState({})
    const [comments,setComment] = useState([])
    
    const getPosts = async () => {
        const getPost = await PostService.newsGetById(newId.id)
        setPost(getPost.data)
    }
    const getComment = async() => {
        const getComments = await PostService.getCommentByIdNews(newId.id) 
        setComment(getComments.data.results)
    }
    const delPost = () => {

    }
    const updatePost = () => {

    }
    const allComments = useMemo(() => {
        return comments
    }, [comments])

    useEffect(() => {
        getPosts()
        getComment()
    }, [])
    const createComment = (newComment) => {
        setComment([...comments,newComment])
    }
    return (
        <div>
            <hr />
            <div>            
            <button onClick={updatePost}>update</button>

            <button>delete</button>
            </div>

            <hr />
            <h1>single new {newId.id} </h1>
                <div>
                    <h3>{post.title}</h3>
                    <br />
                    {post.body}

                </div>

            <div>
                <br />
                <hr />
                <PostComment create={createComment}/>
                <hr />
                <br />
                {allComments.map((comment) =>
                    <div key={comment.id}> 
                        <h1>{comment.comment}</h1>
                    </div>
                )}
            </div>

        </div>
    )
}

export default New