import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <section className='section  '>
        <div className='title slide '>
          <h1>About me</h1>
        </div>

        <p>
          "The people who are crazy enough to think they can change the world
          are the ones who do" ~ Steve Jobs. <br />
          I'm crazy enough to think that being a Data Scientist and a Software
          Developer, and working on the right project I can change the world for
          better.
          <br />
          <div className='link'>
            <a
              href='https://youpele52.github.io/Resume/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume.
              <div className='underline'></div>
            </a>
          </div>
        </p>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    text-align: center;
    padding: 1.5rem 0;
    animation: 1s ease-out 0s 1 slideInFromSide;
  }
  .link {
    display: inline;
  }
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

  @keyframes slideInFromSide {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`

export default About
