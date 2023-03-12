import { useEffect } from 'react'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobs'

const Stats = () => {
  const dispatch = useDispatch()

  const { isLoading, monthlyApplications, stats } = useSelector(
    (store) => store.allJob
  )

  useEffect(() => {
    dispatch(showStats())
  }, [])

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
