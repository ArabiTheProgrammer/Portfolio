import React, { useState } from 'react'
import Circles from '../layer/Circles'
import Title from '../layer/Title'
import { BsArrowRight } from "react-icons/bs";
import Transition from '../Transition';

const Contact = () => { 
  return (

    <>
      <Transition />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
    <div className="h-full font-Poppins">
      <div className="container py-32 mx-auto text-center xl:text-left flex items-center justify-center h-full ">
        <div className="flex flex-col max-w-[700px] w-full">
          <h2 className="h2 text-center mb-12 text-white">Let's <span className="text-accent">connect.</span></h2>
          <form className="flex-1 flex flex-col text-white gap-6 w-full mx-auto">
              <div className="flex gap-6 w-full">
                 <input type="text" placeholder='Name' className="input"/>
                 <input type="email" placeholder='Email' className="input"/>
              </div>
              <input type="text" placeholder='Subject' className="input" />
              <textarea placeholder='Message' className="textarea"></textarea>
              <a href="mailto: mdjalaluddinarabi@gmail.com">
                <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                    Let's Talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
                </button>
              </a>
          </form>
        </div>
      </div>
      <Circles/>
    </div>
      </motion.div>
    </>
  )
}

export default Contact