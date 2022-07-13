import React from 'react';
import {Link} from "react-router-dom";

const PostItem = (props) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}.{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>

            </div>
            <div className='button'>
                <Link to={`/news/${props.post.id}`}>Open</Link>
                {/* <button onClick={() => navigate(`/news/${props.post.id}`)}>open</button> */}
            </div>
            <div className='post__btn'>
                <button onClick={() => props.remove(props.post)}>delete</button>
            </div>
            
        </div>
    );
};
export default PostItem;