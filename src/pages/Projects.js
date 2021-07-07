import React from 'react'
import ProjectList from '../components/ProjectList'
import styled from 'styled-components'

const Projects = () => {
  return (
    <Wrapper>
      <div className='section'>
        <div className='title slide'>
          <h1>Projects</h1>
          {/* <p>Underconstruction</p> */}
        </div>
        <ProjectList />

        <p></p>
      </div>
    </Wrapper>
  )
}
export default Projects

const Wrapper = styled.div`
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-150%);
    }
    90% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .slide {
    animation: 1s ease-out 0s 1 slideInFromTop;
  }
`
