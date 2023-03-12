import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../features/allJobs/allJobs'

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJob)
  const dispatch = useDispatch()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })

  const nextPage = () => {
    let newPage = page + 1

    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1

    if (newPage < 1) {
      newPage = pages.length
    }
    dispatch(changePage(newPage))
  }

  return (
    <Wrapper>
      <button type='button' className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
      </button>
      <div className='btn-container'>
        {pages.map((item) => {
          return (
            <button
              key={item}
              type='button'
              className={page === item ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(item))}
            >
              {item}
            </button>
          )
        })}
      </div>
      <button type='button' className='next-btn' onClick={nextPage}>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer
