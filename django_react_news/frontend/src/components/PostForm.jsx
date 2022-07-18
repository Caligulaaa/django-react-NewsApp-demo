import React,{useState} from 'react'

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'', body:''})

    
    const addNewPost = (e) => {
        e.preventDefault()
    
        const newPost = {
            ...post
        }
        create(newPost)
        setPost({title:'',body:''})

      }
  return (
    <form>
        <input 
            value={post.title}
            onChange={e => setPost({...post,title:e.target.value})}
            type='text'
            placeholder='title'

            />

        <input 
            value={post.body}
            onChange={e => setPost({...post,body:e.target.value})}
            type='text' 
            placeholder='body'
        />
        <button onClick={addNewPost}>add post</button>
    </form>
  )
}

export default PostForm