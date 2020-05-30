import React from 'react';
import Card from '../UI/Card'; 
import './style.css'; 

const BlogPost = (props) => {
  return (
      <div className = 'blogPostContainer'>
        <Card>
          <div className='blogHeader'>
            <span className='blogCategory'>Featured</span>
            <h1 className='postTitle'>Beautiful is always beautiful</h1>
            <span className='postedBy'>posted on July 21, 2020 by Hose</span>
          </div>

          <div className='postImageContainer'>
            <img src={require('../../blogPostImages/memories-from.jpg')} alt='Post Image' />
          </div>

          <div className='postContent'>
            <h3>Post Title</h3>
            <p>lorem ipsim</p>
          </div>

        </Card>
      </div>
  )
}

export default BlogPost
