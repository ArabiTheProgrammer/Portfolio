import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxArrowTopRight } from "react-icons/rx";

export const serviceData = [
    {
      icon: <FaReact/>,
      title: "React JS",
      description: "I Can Make A Website Based On React JS!",
    },
    {
      icon: <div className="md:flex ml-5 md:ml-0 md:gap-x-5"> <FaHtml5/> <FaCss3/> <IoLogoJavascript/> </div>,
      title: "Html, CSS And Javascript",
      description: "I Can Make A Website That Can Be Processed Through Html , CSS And Javascript!",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next JS",
      description: "I Can Also Make A Website Based On Next JS!",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      description: "I Can Make Any Website With Tailwind CSS Like Html, React , Next JS E.t.c!",
    },
    {
      icon: <FaFigma />,
      title: "Figma",
      description: "I Can Also UI/UX Design On Figma Whenever Needed!",
    },
]

const SeviceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[380px] pb-12"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(85,65,169,0.15)] transition-all duration-300">
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          )
        } )
      }
    </Swiper>
  )
}

export default SeviceSlider