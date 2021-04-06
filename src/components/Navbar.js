import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../assets/pic.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useSidebarContext } from '../context/sidebar_context'
import Switch from './Switch'

// import CartButtons from './CartButtons'
// import { useProductsContext } from '../context/products_context'
// import { useUserContext } from '../context/user_context'
const getStorageTheme = () => {
  let theme = 'dark-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return { theme }
}
const Nav = () => {
  const { openSidebar } = useSidebarContext()
  const [theme, setTheme] = useState(getStorageTheme().theme)
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    // here we are accessing the HTML document
    document.documentElement.className = theme

    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* Link comp from react-router dom */}
          {/* link to the home page */}
          <Link to='/'>
            <img src={logo} alt='Youpele' />
          </Link>
          {/* the type here is necessary for the html */}
          <button className='nav-toggle' type='button' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <div className='dark-mode-toggle nav-links'>
          <Switch
            isOn={theme === 'dark-theme' ? true : false}
            onColor='greenyellow'
            handleToggle={toggleTheme}
          />
        </div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: #040c1a;
  background: var(--clr-footer-navbar);

  .dark-mode-toggle {
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 45px;
      margin-left: -15px;
      border-radius: 50%;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-the-green);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        // color: var(--clr-grey-3);
        color: var(--clr-normal-text);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: var(--clr-the-green);
          // border-bottom: 2px solid var(--clr-the-green);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
