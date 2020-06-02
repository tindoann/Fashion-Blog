import React, {useState} from 'react'; 
import {Navlink} from 'react-router-dom'; 
import './style.css'; 

const Navbar = (props) => {

  const [search, setSearch] = useState(false); 

  const submitSearch = (e) => {
    e.preventDefault(); 
    alert('Searched')
  }

  const openSearch = () => {
    setSearch(true); 
  }

  const searchClass = search ? 'searchInput active' : 'searchInput'; 

  return (
    <div className='navbar'>
      <ul className='navbarMenu'>
        <li><Navlink to='/'>Home</Navlink></li>
        <li><Navlink to='/about-us'>About Us</Navlink></li>
        <li><Navlink to='/post'></Navlink>Posts</li>
        <li><Navlink to='/contact'></Navlink>Contact Us</li>
      </ul>
      <div className='search'>
        <form onsubmit={submitSearch}>
          <input type='text' className={searchClass} placeholder='Search' />
          <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
        </form>
      </div>
    </div>
  )
}

export default Navbar
