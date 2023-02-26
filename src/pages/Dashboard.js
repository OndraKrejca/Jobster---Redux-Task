import React from 'react'
import { Link } from 'react-router-dom'

import Landing from './Landing'

const Dashboard = () => {
  return (
    <div>
      <Link to='/landing' className='btn'>
        Click
      </Link>
      <h1>DashBoard</h1>
    </div>
  )
}

export default Dashboard
