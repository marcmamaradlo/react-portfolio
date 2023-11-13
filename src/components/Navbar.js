import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar-logo'>
          <a href='*'>
            <p>
              <span>{'<'}</span>
              Marc Mamaradlo
              <span> {'/>'}</span>
            </p>
          </a>
        </div>
        <div className='navbar-links'>
          <a href='*'>About</a>
          <a href='*'>Projects</a>
          <a href='*'>Contact</a>
        </div>
        <div className='hamburger-icon'>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar;