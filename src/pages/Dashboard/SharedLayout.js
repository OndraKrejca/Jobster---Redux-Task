import { Outlet } from 'react-router-dom'
import { Bigsidebar, Navbar, Smallsidebar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <Smallsidebar />
        <Bigsidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
