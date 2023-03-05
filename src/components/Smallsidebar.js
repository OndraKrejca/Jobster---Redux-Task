import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'

//Links
import { NavLinks } from './index'

//Function userSlice
import { toggleSideBar } from '../features/user/userSlice'

const Smallsidebar = () => {
  const dispatch = useDispatch()
  const { isSideBarOpen } = useSelector((state) => state.user)

  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container '
        }
      >
        <div className='content'>
          <button
            className='close-btn'
            onClick={() => dispatch(toggleSideBar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>

          <NavLinks toggleSideBar={toggleSideBar} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Smallsidebar
