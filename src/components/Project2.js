import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Project = ({
  id,
  title,
  img,
  description,
  url,
  github,
  techstack,
  domain,
}) => {
  // console.log(projects)
  return (
    <Wrapper>
      <section className='project'>
        <div className='img-container'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <img src={img} alt={title} />
          </a>
        </div>
        <div className='project-footer'>
          <h3>{title} </h3>
          <p>
            <span>Tech: </span> {techstack}
          </p>
          <div>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <FaGithub className='social-icon'> </FaGithub>
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Project

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
    margin-bottom: 0.5rem;
  }
  .project a {
    display: flex;
    justify-content: center;
    background: ;
  }
  p span {
    text-decoration: bold;
  }
`
