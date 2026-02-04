import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import '../../App.css'
import { BsDashLg } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Credentials = ({className, time, topic, credit, description}) => {
  return (
    <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden'>
      <ul>
        <li className="li relative font-Poppins">
          <div className="flex">
              <div className="w-[40px]  h-[40px] text-white bg-accent rounded-full flex items-center justify-center text-center">
              <FaBriefcase className=""/>
            </div>
            <div className="">
              <span className={`time ml-4 uppercase ${className}`}>{time}</span>
            </div>
          </div>
          <div className="flex ml-[3.67rem]">
            <h5 className="mt-[7px] mb-[10px] text-[#fff] font-semibold">{topic}</h5>
            <BsDashLg className="mt-[10px] ml-3 mb-[10px] text-[20px]"/>
            <h5 className="mt-[10px] ml-3 mb-[10px] uppercase">{credit}</h5>
          </div>
          <p className="ml-[3.67rem] capitalize">{description}</p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Credentials