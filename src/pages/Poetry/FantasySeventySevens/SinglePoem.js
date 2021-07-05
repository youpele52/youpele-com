import React from 'react'
import { poetry } from '../../../components/Poetry/Collection/FantasySeventySevens'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { filter } from 'async'

const SinglePoem = () => {
  const { id } = useParams()

  //   const mm = poetry.map((poem) => {
  //     if (id == poem.id) {
  //       console.log(poem.id)
  //     }
  //   })
  return (
    <Wrapper>
      <section className='section'>
        {poetry.map((poem) => {
          // console.log(typeof poem.id)
          if (Number(id) === poem.id) {
            return (
              <main key={id}>
                <div className='title text-red-600 '>
                  <Link to='/poetry/FantasySeventySevens' className=''>
                    <h2>Fantasy Seventy Sevens</h2>
                    <div className='underline'></div>
                  </Link>
                  <h3>{poem.title}</h3>
                </div>
                {/* <div className='title'> */}
                {/* </div> */}
                <div className=''>
                  {poem.body.map((body, index) => {
                    return <p key={index}>{body}</p>
                  })}
                </div>
                <div className='link'>
                  <Link to='/poetry/FantasySeventySevens' className=''>
                    Back to Fantasy Seventy Sevens
                  </Link>
                </div>
                <div className='underline'></div>
              </main>
            )
          }
        })}
      </section>
    </Wrapper>
  )
}

export default SinglePoem

const Wrapper = styled.div`
  h3 {
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
