import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='bg-gray-800 p-4'>
    <ul className='flex space-x-4 justify-center'>
        <li><Link to='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded'>Home</Link></li>
        <li><Link to='/top-rated' className='text-white  hover:bg-gray-700 px-3 py-2 rounded'>Top Rated</Link></li>
        <li><Link to='/upcoming' className='text-white  hover:bg-gray-700 px-3 py-2 rounded'>Upcoming</Link></li>
        <li><Link to='/search' className='text-white  hover:bg-gray-700 px-3 py-2 rounded'>Search</Link></li>
    </ul>

   </nav>
  )
}

export default Navbar
