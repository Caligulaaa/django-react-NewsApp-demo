import React, { useEffect, useState,useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import PostComment from '../components/PostComment';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';


const New = () => {
    const newId = useParams();
    const [post,setPost] = useState({})
    const [comments,setComment] = useState([])
    
    const getPosts = async () => {
        const getPost = await PostService.newsGetById(newId.id)
        setPost(getPost.data)
    }
    const getComments = async() => {
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
        getComments()
    }, [])
    const createComment = (getNewComment) => {
        setComment([...comments,getNewComment])
    }
    return (
        <div>
            <hr style={{margin:'15px 0'}}/>
            <div>            
            <button onClick={updatePost}>update</button>

            <button>delete</button>
            </div>

            <hr style={{margin:'15px 0'}}/>
            <h1>single new {newId.id} </h1>
                <div>
                    <h3>{post.title}</h3>
                    <br />
                    {post.body}

                </div>
            <div >
                <br />
                <hr style={{margin:'15px 0'}}/>
                <PostComment create={createComment}/>
                <br />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Box sx={{       
                    width: 700,
                    borderColor: 'black',
                    borderRadius: 2,
                    boxShadow: 2,
                    }}>
                       <h1 style={{textAlign: 'center'}}>Comments</h1>
                       <hr style={{margin:'15px 0'}}/>
      {/* <Card variant="outlined">asd</Card> */}
                
                {allComments.map((comment,index) =>
                    <div key={index}> 
                    <Card sx={{margin: 3}}
                    variant="outlined" >
                        <CardContent >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {comment.user} (id-user)
                            </Typography>
                            <br />
                            <Typography variant="body2">
                            {comment.comment}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">delete(not work)</Button>
                        </CardActions>
                    </Card>
                    </div>
                )}
                <hr style={{margin:'15px 0'}}/>
                <h1>pagination</h1>
                </Box>
                </Box>
            </div>

        </div>
    )
}

export default New