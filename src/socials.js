import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socials = [
  {
    id: 4,
    icon: <FaGithub className='social-icon'> </FaGithub>,
    url: 'https://github.com/youpele52',
  },
  {
    id: 1,
    icon: <FaLinkedin className='social-icon'> </FaLinkedin>,
    url: 'https://www.linkedin.com/in/youpele52/',
  },
  {
    id: 2,
    icon: <FaTwitter className='social-icon'> </FaTwitter>,
    url: 'https://www.twitter.com/youpele52/',
  },
  {
    id: 3,
    icon: <FaInstagram className='social-icon'> </FaInstagram>,
    url: 'https://instagram.com/youpele52/',
  },
]

const links = socials.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        target='_blank'
        rel='noopener noreferrer'
        className='social-link'
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  )
}
