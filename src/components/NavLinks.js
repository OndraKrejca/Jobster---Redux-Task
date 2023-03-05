import React from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import { useDispatch } from 'react-redux'

const NavLinks = ({ toggleSideBar }) => {
  const dispatch = useDispatch()

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
            onClick={() => dispatch(toggleSideBar())}
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
