import React, {useState, useEffect} from 'react';
import Card from '../UI/Card'; 
import './style.css'; 
import data from '../../data/blog.json'; 

const BlogPost = (props) => {

  const[post, setPost] = useState({
    id:, 
    blogCategory:, 
    blogTitle:, 
    postedOn:, 
    author:, 
    blogImage:, 
    blogText:
  }); 

  useEffect(() => {
    const postId = props.match.params.postId; 
    const post = blogPost.data.find(post => post.id == postId); 
    setPost(post)
    setPostId(postId)
  }, [post,props.match.params.postId]); 

  if (post.blogImage == '') 
    return null; 

  return (
      <div className = 'blogPostContainer'>
        <Card>
          <div className='blogHeader'>
            <span className='blogCategory'>Featured</span>
            <h1 className='postTitle'>{post.bio}</h1>
            <span className='postedBy'>posted on {post.postedOn} by {post.author}</span>
          </div>

          <div className='postImageContainer'>
            <img src={require(`../../blogPostImages/${post.blogImage}`)} alt='Post Image' />
          </div>

          <div className='postContent'>
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>

        </Card>
      </div>
  )
}

export default BlogPost
