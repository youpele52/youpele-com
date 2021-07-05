import React from 'react'
import { poetry } from '../../../components/Poetry/Collection/Fiction'
// '../../../components/Poetry/Collection/Fiction'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

const SinglePoem = () => {
  const { id } = useParams()
  console.log(poetry)
  console.log(id)

  //   const mm = poetry.map((poem) => {
  //     if (id == poem.id) {
  //       console.log(poem.id)
  //     }
  //   })
  return (
    <Wrapper>
      <section className='section'>
        {poetry.map((poem) => {
          if (id == poem.id) {
            console.log(poem)
            return (
              <main key={id}>
                <div className='title '>
                  <Link to='/poetry/Fiction' className=''>
                    <h2>Fiction</h2>
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
                  <Link to='/poetry/Fiction' className=''>
                    Back to Fiction
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
