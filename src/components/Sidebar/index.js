import React from 'react'; 
import Card from '../UI/Card'; 
import './style.css'; 

const Sidebar = (props) => {
  return (
    <div className='sidebarContainer'>
      <Card style={{ marginBottom:'20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className='cardHeader'>
          <span>About Us</span>
        </div>
          <div className='profileImageContainer'>
            <img src=''/>
          </div>
          <div className='cardBody'>
            <p className='personBio'>May name is Tin, I am a software developer</p>
          </div>
      </Card>

      <Card style={{ marginBottom:'20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className='cardHeader'>
          <span>Social Network</span>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>July 21, 2020</span>
          </div>
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>July 21, 2020</span>
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom:'20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHearder"></div>
          <span>Recent Posts</span>
      </Card>
    </div>
  )
}

export default Sidebar
