import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thuunkAPI) => {
    try {
      // const resp = await axios('url')
      // return
      console.log(JSON.stringify(user))
    } catch (error) {
      return thuunkAPI.rejectWithValue('nefunguje')
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thuunkAPI) => {
    try {
      // const resp = await axios('url')
      // return
      console.log(user)
    } catch (error) {
      return thuunkAPI.rejectWithValue('nefunguje')
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraeducers: {},
})

export default userSlice.reducer
