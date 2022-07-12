import  axios  from 'axios';
import React, { useState,useEffect } from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    getPosts()

  }, [])

  const getPosts = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/news/')
    // console.log(response.data.results)
    setPosts(response.data.results)
  }


    return (
      <div className='App'>

        <hr style={{margin:'15px 0'}}/>
        <hr style={{margin:'15px 0'}}/>

        {posts.map((post,index) => 
                <div key={post.id}> 
                    <PostItem number={index+1} post={post} key={post.id} />
                </div>
                )}
      </div>  

    );
}

export default App;