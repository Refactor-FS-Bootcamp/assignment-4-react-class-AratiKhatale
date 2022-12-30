import React from 'react'
import './PostI.css'


const PostI = ({ post }) => {
    return (
        <div className='container'>
            <div className='h3'><h3>Title: {post.title} </h3></div>
            <div className='img-tag'> <img src={post.image}></img></div>
             <div className='h3'><h3>Price:{post.price}</h3></div>
            
        </div>
    )
}

export default PostI