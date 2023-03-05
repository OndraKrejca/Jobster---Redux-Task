import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//css
import Wrapper from '../assets/wrappers/Navbar'

//Icons
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'

//Image
import Logo from './Logo'

//Action userSlice
import { toggleSideBar, logoutUser } from '../features/user/userSlice'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => dispatch(toggleSideBar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='log-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle /> {user?.name} <FaCaretDown />
          </button>

          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown '}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                dispatch(logoutUser('Logout done'))
                setShowLogout(false)
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
