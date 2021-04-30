import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Project from './Project'
import projectData, { whatNow } from '../utils/project_list'
import ProjectCategories from './ProjectCategory'

const domains = [
  'all',
  ...new Set(projectData.map((project) => project.domain)),
]

const ProjectList = () => {
  const [projects, setProjects] = useState([])
  //   console.log(projects)
  const [projectCategories, setProjectCategories] = useState(domains)
  const filterItems = (category) => {
    if (category === 'all') {
      setProjects(projectData)
      return
    }
    const filteredProjects = projectData.filter(
      (project) => project.domain === category
    )
    setProjects(filteredProjects)
  }
  useEffect(() => {
    setProjects(projectData)
  }, [projectData])

  return (
    <Wrapper>
      <section className='section__'>
        {/* <ProjectCategories
          filterItems={filterItems}
          projectCategories={projectCategories}
        /> */}
        <div className='projects-center'>
          {projects.map((project) => {
            // console.log(project.title)
            return <Project key={project.id} {...project} />
          })}
        </div>
      </section>
    </Wrapper>
  )
}

export default ProjectList

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
