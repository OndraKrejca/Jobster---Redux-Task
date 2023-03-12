import React, { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import PageBtnContainer from './PageBtnContainer'

import { getAllJobs } from '../features/allJobs/allJobs'

const JobsContainer = () => {
  const {
    isLoading,
    jobs,
    totalJobs,
    page,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((state) => state.allJob)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

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
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((oneJob) => {
          return <Job key={oneJob._id} {...oneJob} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
