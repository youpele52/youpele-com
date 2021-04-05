import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='section page-100  '>
      <div className='title'>
        <h2>
          404
          {/* <span role='img' aria-label>
            🥴
          </span> */}
        </h2>
        <p>
          We are stuck with technology when all we really want is just stuff
          that works. How do you recognize something that is still technology? A
          good clue is if it comes with a manual. ~ Douglas Adams
        </p>
        <Link to='/' className='btn'>
          Back home
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage
