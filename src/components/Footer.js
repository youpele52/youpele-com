import React from 'react'
import styled from 'styled-components'
import Socials from '../socials'

const Footer = () => {
  return (
    <Wrapper>
      <footer className='footer'>
        <div>
          <Socials styleClass='footer-links' />
          <h4>
            &copy;{new Date().getFullYear()} <span>Youpele52</span>
          </h4>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .footer {
    position: relative;
    bottom: 0;
    width: 100%;
    /* height: 2.5rem;   */

    height: 6rem;
    background: #222;
    background: #040c1a;
    /* background: #000f21; */
    text-align: center;
    display: grid;
    place-items: center;
  }
  .footer h4 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--clr-grey-5);
    font-weight: normal;
    /* text-transform: uppercase; */
  }
  .footer h4 span {
    color: var(--clr-the-blues);
  }
  .footer-links {
    margin: 0 auto 1rem auto;
  }
  .footer .social-link {
    /* color: var(--clr-white); */
    color: var(--clr-grey-5);
  }
  .footer .social-link:hover {
    color: var(--clr-the-green);
  }

  /* social links */
  .social-links {
    margin-top: 1rem;
    width: 7rem;
    display: flex;
    justify-content: space-between;
  }
  .social-link {
    font-size: 1.2rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
`

export default Footer
