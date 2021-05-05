import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <section className='section  '>
        <div className='title'>
          <h2>About me</h2>
        </div>

        <p>
          Here is my favorite quote from Steve Jobs, "The people who are crazy
          enough to think they can change the world are the ones who do." Now
          you know about me. <br />
          <div className='link'>
            <a
              href='https://github.com/youpele52/youpele/blob/main/Resume/youpeleResumeDSNoRef.pdf'
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
  }
  .link {
    display: inline;
  }
`

export default About
