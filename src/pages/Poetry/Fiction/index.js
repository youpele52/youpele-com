// this will contain PoemList comp
import React from 'react'
import PoemList from '../../../components/Poetry/Collection/Fiction/PoemList'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// this contain comp PoemList
function index() {
  return (
    <div className='section'>
      <div className='title'>
        <h1>Fiction</h1>
      </div>

      <PoemList />
      <Wrapper>
        <div className='link'>
          <Link to='/poetry' className=''>
            Back to Poetry
          </Link>
        </div>
        <div className='underline'></div>
      </Wrapper>
    </div>
  )
}

export default index

const Wrapper = styled.div`
  h1 {
    padding: 2rem;
  }
  .link {
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  p {
    text-align: center;
  }
`
