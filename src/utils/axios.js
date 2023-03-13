import axios from 'axios'
import { getFromLocalStorage } from './localStorage'
import { clearStoreThunk } from '../features/user/userSlice'

const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

// customFetch.interceptors.request.use((config) => {
//   const user = getFromLocalStorage()
//   if (user) {
//     config.headers.common["Authorization"] = `Bearer ${user.token}`
//   }
//   return config

// })

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStoreThunk())
    return thunkAPI.rejectWithValue('Login please')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
