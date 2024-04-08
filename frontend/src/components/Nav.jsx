import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
    <div className='Navbar'>
        <Link to={"/"}><h2>BLOG.io</h2></Link>
        <div className='TagName'>
        <NavLink to={"/"}>Post</NavLink>
        <NavLink to={"/create-post"}>Create Post</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Nav