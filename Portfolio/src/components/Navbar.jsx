import React, { useState } from 'react'

import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Transition from './Transition';


const Navbar = () => {

  return (
    <nav className='flex z-10 flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[78%] top-0 w-full xl:max-w-md xl:h-screen'>

          <div className="flex w-full xl:w-[100px] xl:flex-col items-center justify-between xl:justify-center gap-y-7 px-4 md:px-40 xl:px-0 h-8 xl:h-max xl:py-5 py-8 text-[#f6f6f6] transition-all duration-300 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">

          <div className="xl:flex">
            <a className="xl:flex xl:flex-col group" href="/">       
              <HiHome  className="text-[#f6f6f6] xl:ml-[11.5px] ml-[3.4px] group-hover:text-accent transition-all duration-300"/>
            <p className="
             xl:text-[17px]  
             group-hover:text-accent
             text-[15px]
             pr-[5px]
             xl:transition-all xl:duration-300 xl:hover:text-accent xl:mr-[-10px]">Home</p>
             </a>
          </div>

          <div className="xl:flex">
            <a className="xl:flex xl:flex-col group" href="/About">       
              <HiUser  className="text-[#f6f6f6] xl:ml-[11.5px] ml-[3.4px] group-hover:text-accent transition-all duration-300"/>
            <p className="
             xl:text-[17px]  
             group-hover:text-accent
             text-[15px]
             pr-[5px]
             xl:transition-all xl:duration-300 xl:hover:text-accent xl:mr-[-10px]">About</p>
             </a>
          </div>

          <div className="xl:flex">
            <a className="xl:flex xl:flex-col group" href="/Service">       
              <HiViewColumns  className="text-[#f6f6f6] xl:ml-[15px] ml-[3.4px] group-hover:text-accent transition-all duration-300"/>
            <p className="
             xl:text-[17px] 
             group-hover:text-accent
             text-[15px]
             pr-[5px]
             xl:transition-all xl:duration-300 xl:hover:text-accent xl:mr-[-10px]">Service</p>
             </a>
          </div>

          <div className="xl:flex">
            <a className="xl:flex xl:flex-col group" href="/Work">       
              <HiRectangleGroup  className="text-[#f6f6f6] xl:ml-[8px] ml-[3.4px] group-hover:text-accent  transition-all duration-300"/>
            <p className="
             xl:text-[17px] 
             group-hover:text-accent 
             text-[15px]
             pr-[5px]
             xl:transition-all xl:duration-300 xl:hover:text-accent xl:mr-[-10px]">Work</p>
             </a>
          </div>

          <div className="xl:flex">
            <a className="xl:flex xl:flex-col group" href="/Contact">       
              <HiEnvelope  className="text-[#f6f6f6] xl:ml-[17px] group ml-[3.4px] group-hover:text-accent transition-all duration-300"/>
            <p className="
             xl:text-[17px]
             group-hover:text-accent 
             text-[15px]
             pr-[5px]
             xl:transition-all xl:duration-300 xl:hover:text-accent xl:mr-[-10px] ">Contact</p>
             </a>
          </div>
             
          </div>  

    </nav>
  )
}

export default Navbar