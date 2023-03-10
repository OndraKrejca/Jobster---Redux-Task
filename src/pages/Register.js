import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { loginUser, registerUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
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

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user])

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
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading....' : 'submit'}
        </button>

        <button
          type='submit'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
        >
          {isLoading ? 'Loading...' : 'Demo'}
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
