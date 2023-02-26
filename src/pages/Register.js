import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { loginUser, registerUser } from '../features/user/userSlice'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    let value = e.target.value
    let name = e.target.name

    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, isMember } = values
    if ((!isMember && !name) || !email || !password) {
      toast.error('Nefunguje to')
      return
    }

    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    } else {
      dispatch(registerUser({ name, email, password }))
    }
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo></Logo>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Allready a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
