import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Poem = (poem) => {
  const { id, title, dateWritten, body, img } = poem
  //   console.log(body)
  return (
    <Wrapper>
      <section className='project'>
        <div className='img-container'>
          <Link to={`/poetry/FantasySeventySevens/${id}`}>
            {img.length > 1 ? (
              <img src={img} alt={title} />
            ) : (
              <img
                src='https://images.unsplash.com/photo-1574786200654-57a80e1292b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                alt={title}
              />
            )}
          </Link>
        </div>
        <div className='project-footer'>
          <Link to={`/poetry/FantasySeventySevens/${id}`}>
            <h3>{title} </h3>
          </Link>
          <div className='underline'></div>

          {/* <p>"{body.slice(4, 5)}..."</p> */}
        </div>
      </section>
    </Wrapper>
  )
}

export default Poem

const Wrapper = styled.div`
  .project {
    background: var(--mainWhite);

    margin-bottom: 2rem;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: var(--mainBorderRadius);
  }
  .project:hover {
    box-shadow: var(--darkShadow);
  }
  .project img {
    display: block;
    margin: auto;
    height: 20rem;
    width: 20rem;
    object-fit: cover;
    border-top-left-radius: var(--mainBorderRadius);
    border-top-right-radius: var(--mainBorderRadius);
  }
  .project-footer {
    padding: 1.5rem;
  }
  .project-footer h3,
  .project-footer h4,
  .project-footer p {
    display: flex;
    justify-content: center;
    text-align: center;

    color: hsl(209, 34%, 30%);
    margin-bottom: 0.3rem;
  }
  .project-footer h3 {
    font-size: 1.25rem;
  }
  .project-footer p {
    text-transform: none;
    color: var(--darkGrey);
    color: var(--clr-normal-text);
    color: #282c35;

    margin-bottom: 0.5rem;
  }
  .project a {
    display: flex;
    justify-content: center;
    background: ;
  }
  a:hover h3 {
    color: var(--clr-the-green);
  }
`
