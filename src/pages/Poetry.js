import React, { useState } from 'react'
import styled from 'styled-components'
import PoemCollection from '../components/Poetry/Collection'
import { Link } from 'react-router-dom'
import PoemCard from '../components/PoemCard'
import {
  Darker,
  FantasySeventySevens,
  Fiction,
  Chapter4,
  Chapter3,
  BlackQueenCleopatra,
  Street66,
  MollyAndHero,
} from '../utils/PoemGroups'
const Poetry = () => {
  // const FantasySeventySevens = {
  //   title: 'Fantasy Seventy Sevens',
  //   link: '/poetry/FantasySeventySevens',
  //   img: '',
  // }

  return (
    <Wrapper>
      <section className='section '>
        <div className='title slide'>
          <h2>Poetry</h2>
        </div>
        <section className='section__'>
          <h3 className='section-title'>New </h3>
          <div className='projects-center'>
            <PoemCard poem={Darker} />
            <PoemCard poem={Chapter4} />
            <PoemCard poem={Chapter3} />
          </div>
        </section>
        <section className='section__'>
          <h3 className='section-title'>Red Hot on Wattpad.com</h3>
          <div className='projects-center'>
            <PoemCard poem={BlackQueenCleopatra} />
            <PoemCard poem={Street66} />
            <PoemCard poem={MollyAndHero} />
          </div>
        </section>
        <section className='section__'>
          <h3 className='section-title'>Collections</h3>
          <div className='projects-center'>
            <PoemCard poem={Fiction} />
            <PoemCard poem={FantasySeventySevens} />
            <PoemCard poem={FantasySeventySevens} />
          </div>
        </section>
        {/* <section className='section__'>
          <h3 className='section-title'>Singles</h3>
          <div className='projects-center'>
            <PoemCard poem={FantasySeventySevens} />
            <PoemCard poem={FantasySeventySevens} />
            <PoemCard poem={FantasySeventySevens} />
          </div>
        </section> */}
      </section>
    </Wrapper>
  )
}

export default Poetry

const Wrapper = styled.div`
  .section__ {
    padding: 1.5rem 0;
  }
  .section-title {
    font-size: 2rem;
    // font-weight: normal;
    text-transform: none;
    letter-spacing: var(--mainSpacing);
    text-align: center;
    margin-bottom: 3rem;
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
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-250%);
    }
    90% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .slide {
    animation: 1s ease-out 0s 1 slideInFromTop;
  }
`
