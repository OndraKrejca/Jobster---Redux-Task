import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import jobSlice from './features/job/jobSlice'
import allJobSlice from './features/allJobs/allJobs'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJob: allJobSlice,
  },
})
