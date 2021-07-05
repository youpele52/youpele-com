import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { poetry } from './index'
import Poem from './Poem'

function PoemList() {
  const [poems, setPoems] = useState(poetry)
  //   console.log(poems)
  return (
    <Wrapper>
      <section className='section__'>
        {/* <ProjectCategories
          filterItems={filterItems}
          projectCategories={projectCategories}
        /> */}
        <div className='projects-center'>
          {poems.map((poem) => {
            // console.log(project.title)
            return <Poem key={poem.id} {...poem} />
          })}
        </div>
      </section>
    </Wrapper>
  )
}

export default PoemList

const Wrapper = styled.div`
  .section__ {
    padding: 5rem 0;
  }
  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }

  .projects-center {
    width: var(--smallWidth);

    margin: 0 auto;
    max-width: var(--fullWidth);
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
    // background: red;
  }
  @media screen and (min-width: 576px) {
    .projects-center {
      grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
    }
  }
`
