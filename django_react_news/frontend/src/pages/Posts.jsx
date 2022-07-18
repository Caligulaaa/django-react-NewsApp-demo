import React, { useState,useEffect,useContext } from 'react';
import { usePosts } from '../hooks/usePost';
import PostList from '../components/PostList';
import PostService from '../API/PostService';
import '../styles/App.css';
import Box from '@mui/material/Box';
import MySearch from '../components/UI/Search/Search';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { AuthContext } from '../utils/context';
import { getPageCount } from '../utils/pagination';
import Pagination from '@mui/material/Pagination';

  
function Posts() {
const [posts,setPosts] = useState([])
const [page,setPage] = useState(1)
const [pageTotal,setPageTotal] = useState(0)

const {isAuth} = useContext(AuthContext)
const[filter,setFilter] = useState ({sort:'',query:''})
const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)


const getPosts = async () => {
    const posts = await PostService.getAllNews(page)
    setPageTotal(getPageCount(posts.count,15))
    setPosts(posts.results)
}

useEffect(() => {
    getPosts()
}, [page])

const changePage = (event , value) => {
    setPage(value)
}

const searchPost = (e) =>{
    setFilter({...filter,query:e.target.value})
}
    return (
        <div className='App'>
        <hr style={{margin:'15px 0'}}/>
        <Box sx={{display: 'flex', flexWrap: 'wrap',justifyContent: 'right',typography: 'body1','& > :not(style) + :not(style)': {ml: 2,},}}>
            {isAuth && 
                <Button variant="contained" size="small" >
                    <Link to='/news/add_post' style={{textDecoration:'none',color:'white'}}>ADD post</Link>
                </Button>
            } 
            <Pagination count={pageTotal} page={page} onChange={changePage}/>
            <MySearch value={filter.query} onChange={searchPost} />


            

        </Box>
        <hr style={{margin:'15px 0'}}/>

            <div style={{justifyContent:'center',display: 'flex'}}>
                <PostList posts={sortedAndSearchedPosts} />
            </div>
        </div>  
    );
}


export default Posts