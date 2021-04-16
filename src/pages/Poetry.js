import React from 'react'
import styled from 'styled-components'

const Poetry = () => {
  return (
    <Wrapper>
      <section className='section '>
        <div className='title'>
          <h2>Poetry</h2>
          <p>
            Underconstruction 🚧 <br /> <br />
            To read my poems <br />
            <a
              href='https://www.wattpad.com/youpele'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click here.
            </a>
            <div className='underline'></div>
          </p>
        </div>

        {/* <p>Comming soon...</p> */}
      </section>
    </Wrapper>
  )
}

export default Poetry

const Wrapper = styled.div`
  p {
    text-align: center;
  }
`
