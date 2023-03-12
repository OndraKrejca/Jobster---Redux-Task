import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { getFromLocalStorage } from '../../utils/localStorage'
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}

export const createJob = createAsyncThunk('job/createJob', createJobThunk)

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk)

export const editJob = createAsyncThunk('job/editJob', editJobThunk)

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },

    clearItems: () => {
      return {
        ...initialState,
        jobLocation: getFromLocalStorage()?.location || '',
      }
    },

    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        // const { job } = payload
        state.isLoading = false
        toast.success('Job is add')
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success('Job is remove')
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload)
      })
      .addCase(editJob.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        state.isLoading = false
        toast.success('Job is edit')
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error({ payload })
      })
  },
})

export const { handleChange, clearItems, setEditJob } = jobSlice.actions

export default jobSlice.reducer
