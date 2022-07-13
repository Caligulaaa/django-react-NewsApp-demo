import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__links'>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
        </div>
    </div>
  )
}

export default Navbar