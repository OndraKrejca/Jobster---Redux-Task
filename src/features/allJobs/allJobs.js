import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'
import jobSlice from '../job/jobSlice'

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
}

export const getAllJobs = createAsyncThunk(
  'allJob/getAllJobs',
  async (_, thunkAPI) => {
    let url = '/jobs'

    try {
      const resp = await customFetch.get(url, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })

      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const allJobSlice = createSlice({
  name: 'allJob',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.jobs = payload.jobs
        // state.numOfPages = payload.numOfPages
        // state.totalJobs = payload.totalJobs
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error({ payload })
      })
  },
})

export default allJobSlice.reducer
