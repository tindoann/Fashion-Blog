import React from 'react'; 
import './style.css'; 

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul className='navbarMenu'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'></a>Posts</li>
        <li><a href='#'></a>Contact Us</li>
      </ul>
      <div>
        <input/>
        {/* <img alt='Search' /> */}
      </div>
    </div>
  )
}

export default Navbar
