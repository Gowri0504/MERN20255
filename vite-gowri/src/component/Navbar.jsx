import React from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/home' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
            <Link to='/login' className='nav-link'>Login</Link> 
            <Link to='/skill' className='nav-link'>Skill</Link>
            <Link to='/counter' className='nav-link'>Counter</Link> 
            <Link to='/hooks' className='nav-link'>Hooks</Link> 
        </nav>
    )
}

export default Navbar