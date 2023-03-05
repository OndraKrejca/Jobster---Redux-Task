import React, { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'

import { getAllJobs } from '../features/allJobs/allJobs'

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((state) => state.allJob)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>Sorry this job is not here!</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>Jobs info</h5>
      <div className='jobs'>
        {jobs.map((oneJob) => {
          return <Job key={oneJob._id} {...oneJob} />
        })}
      </div>
    </Wrapper>
  )
}

export default JobsContainer
