import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
import { logoutUser } from '../user/userSlice'
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobs'
import { clearItems } from './jobSlice'
import { authHeader } from '../../utils/authHeader'

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post('/jobs', job, authHeader(thunkAPI))
    thunkAPI.dispatch(clearItems())
    return resp.data.msg
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const resp = await customFetch.delete(
      `/jobs/${jobId}`,
      authHeader(thunkAPI)
    )
    thunkAPI.dispatch(getAllJobs())
    return resp.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  console.log(jobId, 'A', job)
  try {
    const resp = await customFetch.patch(
      `/jobs/${jobId}`,
      job,
      authHeader(thunkAPI)
    )
    thunkAPI.dispatch(clearItems())
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
