import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from './Logo'
import { useSelector } from 'react-redux'

//Links
import { NavLinks } from './index'

const Bigsidebar = () => {
  const { isSideBarOpen } = useSelector((state) => state.user)

  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default Bigsidebar
