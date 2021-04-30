import React from 'react'
import styled from 'styled-components'

const ProjectCategories = ({ filterItems, projectCategories }) => {
  return (
    <Wrapper>
      <div className='btn-container'>
        {projectCategories.map((category, index) => {
          // we have a list so in the return we'll pass in key

          return (
            <button
              key={index}
              type='button'
              className='filter-btn'
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default ProjectCategories

const Wrapper = styled.div`
  .btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }
  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--clr-font);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .filter-btn:hover {
    background: var(--clr-the-green);
    color: var(--clr-white);
  }
`
