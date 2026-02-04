import React from 'react'
import ProjectsBtn from '../ProjectsBtn'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import Avatar from '../Avatar';
import ParticlesContainer from '../ParticlesContainer';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="h-full pt-[150px] z-[5]" >
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className="text-[30px] md:text-[45px] lg:text-[60px] mb-[10px] font-semibold leading-tight text-white z-[5]"> Hi! My Name Is <br /> <span className="text-red-700 font-bold">MD.Jalal Uddin Arabi</span> </motion.h1>
          <motion.div
           variants={fadeIn('down', 0.4)}
           initial='hidden'
           animate='show'
           exit='hidden'
             >

            <TypeAnimation className="h2"
              speed={50}
              repeat={Infinity}
              style={{ color: "#ffffff" }}
              sequence={[
                "Transforming Ideas Into Digital Reality",
                2000,
                "Transforming Ideas Into User Experience",
                2000,
              ]}/>

          </motion.div>
           <motion.p variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className="max-w-sm mt-[10px] md:text-base text-[14px] z-[5] xl:max-x-xl mx-auto xl:mx-0 mb-10 xl:mb-16">I'm a Bangladeshi based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</motion.p>
           <div className="flex md:mt-[-10px] lg:mt-[-19px] justify-center xl:hidden relative">
              <ProjectsBtn/>
           </div>
           <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className="xl:flex hidden">
             <ProjectsBtn/>
           </motion.div>
        </div>
      </div>
        <div className="w-full h-full absolute right-0 bottom-0">
          <div className="bg-none -z-50 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"></div>
          <ParticlesContainer/>
        </div>
        <div className="w-full h-full absolute xl:top-0 lg:top-[4rem] pr-16 top-[4rem]">
          <motion.div variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className="w-full h-full max-w-[150px] lg:max-w-[267px] md:max-w-[200px] md:max-h-[180px] xl:max-w-[507px] xl:absolute -bottom-32 lg:bottom-[23.6rem] lg:right-[15%]"><Avatar/> </motion.div>
        </div>
    </div>
  )
}

export default Home