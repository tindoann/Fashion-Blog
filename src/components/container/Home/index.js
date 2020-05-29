import React from 'react'
import './style.css'; 
import Header from '../../components/Header'; 

function Home() {
  return (
    <div>
      <header className='header'>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact US</a>
      </nav>
      <div>
        social media links
      </div>
      </header>  
    </div>
  )
}

export default Home
