import React from 'react'
import '../component/Style.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src="/images/logo.png" alt="reload" />
      </div>
      <div className='nav_link'>
        <a href="#">HOME</a>
        <a href="#">SHOP</a>
        <a href="#">ABOUT US</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT US</a>
      </div>
      <div className='nav-logo2'>
        <img src="/images/search-normal.png" className='nav-img' alt="reload" />
        <img src="/images/bag-2.png" className='nav-img' alt="reload" />
      </div>
    </div>
  )
}

export default Navbar
