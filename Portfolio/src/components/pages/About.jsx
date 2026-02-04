import React, { useState } from 'react'
import Circles from '../layer/Circles'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap , FaFigma } from "react-icons/fa";
import { SiFramer, SiTailwindcss  } from "react-icons/si";
import CircularProgressBar from '../layer/CircularProgressBar';
import SquareDiv from '../layer/SquareDiv';
import SquareDiv2 from '../layer/SquareDiv2';
import Credentials from '../layer/Credentials';
import { Link } from 'react-router';
import { FaDownload } from "react-icons/fa";
import '../../App.css'
import ParticlesContainer from '../ParticlesContainer';

const aboutData = [
    {
      title: 'skills',
      info: [
        {
          title: <CircularProgressBar percentage={100}/>,
          stage: 'Html',
        },
        {
          title: <CircularProgressBar percentage={100}/>,
          stage: 'CSS',
        },
        {
          title: <CircularProgressBar percentage={78}/>,
          stage: 'JavaScript',
        },
        {
          title: <CircularProgressBar percentage={97}/>,
          stage: 'React',
        },
        {
          title: <CircularProgressBar percentage={91}/>,
          stage: 'Next JS',
        },
        {
          title: <CircularProgressBar percentage={95}/>,
          stage: 'BootStrap',
        },
        {
          title: <CircularProgressBar percentage={100}/>,
          stage: 'Tailwind CSS',
        },
        {
          title: <CircularProgressBar percentage={92}/>,
          stage: 'Figma',
        },
        {
          title: <CircularProgressBar percentage={73}/>,
          stage: 'Redux',
        },
      ],
    },
    {
      title: 'experience',
      info: [
          {
            title:  <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden'><SquareDiv text="2" symbol="+" ptext="Years Of Experience"/></motion.div> ,
          },
        {
          title: <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden'><SquareDiv2 text="10" symbol="+" ptext="Completed Projects"/></motion.div>,
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: <Credentials time="2023 - present" topic="WEB DEVELOPER" credit="Creative IT Institute" description="I wanted to credit Creative IT Institute because, without them I wouldnt be able to make this website till this day because, Creative IT institute has helped me very much in making websites and they also helped other people with making websites."/>,
        },
      ],
    },
  ];

const About = () => {

    let [index, setIndex] = useState(0)

  return (
    <div className="h-full py-24 text-center font-Poppins xl:text-left">
      <div className="relative xl:-ml-20 uppercase flex items-center justify-center">
        <h1 className="h1 xl:text-[56px] text-white font-black absolute z-[5] ">About <span className="text-accent font-black">Me</span></h1>
        <h1 className=" text-[60px] lg:text-[89px] lg:-top-[5.5rem] tracking-widest xl:-top-28 -top-16 xl:text-[110px] text-[hsl(0,0%,49%,.4)] absolute font-black">Resume</h1>
      </div>
      <Circles/>
      <div className="container mx-auto text-white h-full flex flex-col items-center xl:flex-row gap-x-6">
        <motion.div variants={fadeIn ('down', 0.2)} initial="hidden" animate='show' exit='hidden' className="flex-1 flex flex-col xl:mt-0 mt-11">
          <h1 className="text-[27px] lg:text-[34px] xl:text-[40px] font-Poppins xl:-mt-[6.5rem] font-semibold text-white uppercase">Personal <span className="text-accent">Info's</span></h1>
            <div className="mt-4 flex flex-wrap">
                <ul className="flex flex-wrap gap-x-10">
                    <div className="hidden md:block">
                      <li className="flex">
                          <span className="text-white/60">First Name:</span>
                          <span className="ml-2">MD.Jalal Uddin</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Age:</span>
                          <span className="ml-2">12 Years</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Freelance:</span>
                          <span className="ml-2 text-[#5be85b]">Available</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Phone:</span>
                          <a href="tel: +880 01670782357">
                            <span className="ml-2">+880 01670782357</span>
                          </a>
                      </li>
                    </div>
                    <div className="hidden md:block">
                      <li className="flex md:mt-0 mt-2">
                          <span className="text-white/60">Last Name:</span>
                          <span className="ml-2">Arabi</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60"> Nationality:</span>
                          <span className="ml-2">Bangladeshi</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Languages:</span>
                          <span className="ml-2">English, Bengal</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Email:</span>
                          <a href="mailto: mdjalaluddinarabi@gmail.com">
                            <span className="ml-2">mdjalaluddinarabi@gmail.com</span>
                          </a>
                      </li>
                    </div>
                    <div className="md:hidden block">
                      <li className="flex">
                          <span className="text-white/60">First Name:</span>
                          <span className="ml-2">MD.Jalal Uddin</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Last Name:</span>
                          <span className="ml-2">Arabi</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Age:</span>
                          <span className="ml-2">12 Years</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Nationality:</span>
                          <span className="ml-2">Bangladeshi</span>
                      </li>
                    </div>
                    <div className="md:hidden block">
                      <li className="flex xl:mt-0 mt-2">
                          <span className="text-white/60">Freelance:</span>
                          <span className="ml-2 text-[#5be85b]">Available</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60"> Languages:</span>
                          <span className="ml-2">English, Bengal</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Phone:</span>
                          <span className="ml-2">+880 01670782357</span>
                      </li>
                      <li className="flex mt-4">
                          <span className="text-white/60">Email:</span>
                          <span className="ml-2">mdjalaluddinarabi@gmail.com</span>
                      </li>
                    </div>
                </ul> 
            </div>
            <div className="h-0 w-[13rem]">
              <Link className="flex button border border-accent mt-7" to="https://gericht.vercel.app/">
                  <h1 className="">Download CV</h1>
                  <div className="button-icon">
                    <FaDownload/>
                  </div>
              </Link>
            </div>
        </motion.div>
        <div className="flex flex-col xl:mt-20 mt-10 w-full xl:max-w-[48%] h-[480px]">
          <div className="flex xl:ml-0 gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
               <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden' onClick={() => setIndex(itemIndex)} key={itemIndex} className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg hover:text-accent transition-all duration-300 relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>
                  {item.title}
               </motion.div>    
             )
            })}
          </div>
            <div className="py-2 xl:py-6 xl:ml-0 ml-2 flex flex-wrap gap-y-[1px] gap-x-3 xl:gap-y-4 items-center ">
                {aboutData[index].info.map((item, itemIndex) => {
                    return (
                        <motion.div
                          variants={fadeIn ('up', 0.2)}
                          initial="hidden" 
                          animate='show' 
                          exit='hidden'
                          key={itemIndex}
                          className="flex flex-col max-w-max gap-x-2 items-center text-white/60"                        
                        >
                              <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden' className="flex">{item.title}</motion.div> 
                           <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden' className="text-[14px] py-[10px]">{item.stage}</motion.div> 
                          </motion.div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default About