import React from 'react'
import PostItem from './PostItem'


const PostList = ({posts,title}) => {

    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Not Posts
            </h1>
        )
    }

        return (

            <div >
                {/* <h1 style={{textAlign: 'center'}}>{title}</h1> */}

                {posts.map((post) => 
                <div key={post.id}> 
                    <PostItem number={post.id} post={post} key={post.id} />
                </div>
                )}

            </div>
        )
}
export default  PostList;