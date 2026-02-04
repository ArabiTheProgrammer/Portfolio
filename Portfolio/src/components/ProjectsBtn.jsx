import React from 'react'
import { Link } from 'react-router'
import Images from './layer/Images'
import img from '../../public/rounded-text.png'
import { HiArrowRight } from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-[5]">
      <a href="/Work" className="relative w-[185px] h-[185px] flex justify-center items-center border rounded-full group">
        <Images src={img} alt="Rounded-Text.png" className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
        <HiArrowRight className="absolute text-white text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </a>
    </div>
  )
}

export default ProjectsBtn