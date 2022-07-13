import React, { useState,useEffect } from 'react';
import { usePosts } from '../hooks/usePost';
import PostList from '../components/PostList';
import PostService from '../API/PostService';
import '../styles/App.css';
  
function Posts() {
const [posts,setPosts] = useState([])

const[filter,setFilter] = useState ({sort:'',query:''})
const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)

const getPosts = async () => {
    const posts = await PostService.getAllNews()
    setPosts(posts)

}
useEffect(() => {
    getPosts()
}, [])


const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id ))
}

    return (
        <div className='App'>

        <input
                value={filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})}
                placeholder='search..'
            />
        <hr style={{margin:'15px 0'}}/>

        <hr style={{margin:'15px 0'}}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='blah blah blah' />

        </div>  
    );
}


export default Posts