

import React, { Component } from 'react'
import PostI from './PostI'

 class PostIteam extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    async componentDidMount(){
        const url ='https://fakestoreapi.com/products'
        const res= await fetch(url)
        const posts = await res.json()
        this.setState({posts})
    }
  render() {
    const { posts } = this.state;
    return posts.map(post => <PostI  key={post.image} post={post}/>)
  }
}

export default PostIteam