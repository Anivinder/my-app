import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anivinder-reddy-boreddy/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Anivinder" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials