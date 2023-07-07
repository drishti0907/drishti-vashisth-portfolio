import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLinktree} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com" target="_blank"><BsGithub></BsGithub></a>
        <a href="https://linktree.com" target="_blank"><SiLinktree></SiLinktree></a>
        
    </div>
  )
}

export default HeaderSocials