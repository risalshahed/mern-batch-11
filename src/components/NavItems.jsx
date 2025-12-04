import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    <ul className="lg:flex lg:gap-x-8 lg:items-center space-y-3 lg:space-y-0">
      <li className="hover:text-yellow-500">
        <Link to='/'>
          Home
        </Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to='/about'>
          About
        </Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to='/services'>
          Services
        </Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to='/contact'>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default NavItems;