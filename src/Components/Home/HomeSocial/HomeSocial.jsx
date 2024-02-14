import React from 'react';
import { motion } from 'framer-motion';
import { DiGithubBadge } from 'react-icons/di';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const HomeSocial = () => {
  return (
    <>
      <motion.div
        className="home_social grid mt-32 gap-y-4 lg:ml-9 lg:mt-60 xs:mt-4 xs:-ml-20"
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href='https://www.instagram.com/__athar__ansari__/' className='home_social-icon text-xl md:text-lg hover:text-[#E4405F]' target='_blank'>
          <FaInstagram />
        </a>
        <a href='https://github.com/athar-ansari/' className='home_social-icon text-xl md:text-lg hover:text-black hover:opacity-100 opacity-75' target='_blank'>
          <DiGithubBadge />
        </a>
        <a href='https://www.linkedin.com/in/athar--ansari/' className='home_social-icon text-xl md:text-lg hover:text-[#0072b1]' target='_blank'>
          <FaLinkedinIn />
        </a>
      </motion.div>
    </>
  );
};

export default HomeSocial;
