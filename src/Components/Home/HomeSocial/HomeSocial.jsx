import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import {  FaInstagram  , FaLinkedinIn } from "react-icons/fa";

const HomeSocial = () => {
  return (
    <>
    
   <div className="home_social grid mt-32 gap-y-4 lg:ml-9 lg:mt-60 xs:mt-4 xs:-ml-20 ">
    
    <a href='' className='home_social-icon text-xl	md:text-lg hover:text-red-700	'  target='_blank'>
    <FaInstagram />
    </a>

    <a href='' className='home_social-icon text-xl md:text-lg hover:text-black '  target='_blank'>
    <DiGithubBadge />
      </a>

      <a href='' className='home_social-icon text-xl md:text-lg hover:text-red-700'  target='_blank'>
      <FaLinkedinIn />
      </a>

   </div>

    </>
  )
}

export default HomeSocial