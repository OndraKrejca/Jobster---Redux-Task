import React from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = ({ toggleSideBar }) => {
  return (
    <div className='nav-links'>
      {links.map((item) => {
        const { id, text, path, icon } = item
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={toggleSideBar}
          >
            <span className='icon'> {icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
