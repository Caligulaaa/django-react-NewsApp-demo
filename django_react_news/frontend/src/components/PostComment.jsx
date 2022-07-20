import React from 'react'
import { useState } from 'react'
import PostService from '../API/PostService'
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


const PostComment = ({create}) => {
    const [newComment, setNewComment] = useState({comment:''})
    const newId = useParams();

    
    const addNewComment = async (e) =>{
        e.preventDefault()
        var token = localStorage.getItem('authToken')
        const getNewComment = {
            ...newComment
        }
        const response = await PostService.postCommentToNews(newId.id,JSON.parse(token),getNewComment.comment)

        if(response.status === 201){

            create(getNewComment)
            setNewComment({comment:''})
        }

    }

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
    <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'right'
      }}
      noValidate
      autoComplete="off"
        >
        <TextField 
          id="outlined-multiline-static"
          label="Comment"
          multiline
          fullWidth
          rows={2}
          value={newComment.comment}
          onChange={e => setNewComment({...newComment,comment:e.target.value})}
        //   placeholder='comment'
          variant='filled'
        />
        <br />
        <Button 
            onClick={addNewComment} 
            variant="contained"
            >Add comment
        </Button>
        {/* <Button variant="contained" disabled>Add comment</Button> */}
        </Box>
        </Box>
  )
}

export default PostComment