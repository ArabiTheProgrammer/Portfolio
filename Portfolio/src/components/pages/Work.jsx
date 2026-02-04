import React from 'react'
import Circles from '../layer/Circles'
import Title from '../layer/Title'
import Bulb from '../layer/Bulb'
import WorkSlider from '../layer/WorkSlider'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Work = () => {
  return (
    <div className="h-full text-white font-Poppins py-24">
      <Circles/>
      <Title className="xl:text-[92px] tracking-widest md:text-[60px] md:mt-0 lg:mt-0 sm:mt-2 mt-3 text-[45px] sm:text-[50px] lg:text-[89px] xl:mt-5" text="Wo" span="rks" shadow="Projects"/>
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex lg:w-[32vw] flex-col xl:text-left mb-4 xl:mb-0">
             <motion.h2 variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden' className="h2 mt-16 xl:mt-28">My Works <span className="text-accent">.</span></motion.h2>
             <motion.p variants={fadeIn ('up', 0.4)} initial="hidden" animate='show' exit='hidden' className="mb-4 max-w-[400px]">I build responsive, user-friendly websites using modern front-end technologies like HTML, CSS, JavaScript, and React. Let’s create something great together! Some of my works are also listed here!</motion.p>
          </div>
          <motion.div variants={fadeIn ('down', 0.6)} initial="hidden" animate='show' exit='hidden' className="w-full xl:max-w-[65%] xl:mt-24">
            <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}

export default Work