import React, { useState } from 'react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useSelector } from 'react-redux'

const ChartsContainer = () => {
  const [barchart, setBarchart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJob)

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarchart(!barchart)}>
        {barchart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barchart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}

export default ChartsContainer
