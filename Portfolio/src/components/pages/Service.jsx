import React from 'react'
import Circles from '../layer/Circles'
import Title from '../layer/Title'
import Bulb from '../layer/Bulb'
import ServiceSlider from '../layer/SeviceSlider'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import '../../App.css'

const Service = () => {
  return (
    <div className="h-full py-24 font-Poppins text-white overflow-hidden">
      <Circles/>
      <Title className="xl:text-[92px] tracking-widest md:text-[60px] md:mt-0 lg:mt-0 sm:mt-2 mt-3 text-[45px] sm:text-[50px] lg:text-[89px] xl:mt-5" text="Servi" span="ces" shadow="Assistance"/>
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[32vw] flex-col xl:text-left mb-4 xl:mb-0">
             <motion.h2 variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden' className="h2 mt-16 xl:mt-28">My Services <span className="text-accent">.</span></motion.h2>
             <motion.p variants={fadeIn ('up', 0.4)} initial="hidden" animate='show' exit='hidden' className="mb-4 text-[14px] max-w-[400px] mx-auto xl:mx-0">I provide a comprehensive range of professional services designed to meet your needs with precision and care. Whether you're looking for a website, I am committed to delivering exceptional results.</motion.p>
          </div>
          <motion.div variants={fadeIn ('down', 0.6)} initial="hidden" animate='show' exit='hidden' className="w-full xl:max-w-[65%] xl:mt-24">
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}

export default Service