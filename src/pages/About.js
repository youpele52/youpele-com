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
          you know about me.
        </p>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    text-align: center;
  }
`

export default About
