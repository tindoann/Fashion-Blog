import React from 'react'
import card from '../../components/UI/Card'; 
import './style.css'; 

const Post = () => {
  return (
    <section className='container'>
    <BlogPost {...props} />
    <Sidebar {...props} />
    </section>
  )
}

export default Post;
