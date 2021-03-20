import React from 'react'

import Socials from '../socials'
const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <Socials styleClass='footer-links' />
        <h4>
          &copy;{new Date().getFullYear()} <span>Youpele52</span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
