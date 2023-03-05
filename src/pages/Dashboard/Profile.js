import React from 'react'
import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, location, email, lastName } = userData

    if (!name || !email || !lastName || !location) {
      toast.error('Invalid user data')
      return
    }

    dispatch(updateUser(userData))
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setUserData({ ...userData, [name]: value })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='lastName'
            labelText={'last name'}
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button
            type='submit'
            className='btn btn-block'
            onClick={handleChange}
            disabled={isLoading}
          >
            {isLoading ? 'Please wait' : 'Save change'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
