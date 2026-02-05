import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Images from './Images';

const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/Geritch.jpg',
          },
          {
            title: 'title',
            path: '/Orebi.jpg',
          },
          {
            title: 'title',
            path: '/NasirTraders.jpg',
          },
          {
            title: 'title',
            path: '/Finsweet.jpg',
          },
        ],
      },
    ],
  };
  

const WorkSlider = () => {
  return (
    <div 
          className="h-[280px] sm:h-[480px]"
        >
          {
            workSlides.slides.map((slide, index) => {
              return (
                  <div key={index} className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                     {
                        slide.images.map((image, imageIndex) => {
                            return(
                              <div key={imageIndex} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                  <div className="flex items-center justify-center overflow-hidden relative group">
                                    <Images width={500} height={300} src={image.path} />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 duration-300 transition-all">
                                      <div className="flex items-center gap-x-1 sm:gap-x-2 text-[10px] sm:text-[13px] tracking-[0.1em] sm:tracking-[0.2em]">
                                         <div className="delay-100">LIVE</div>
                                         <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                                         <div className="text-base sm:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                           <BsArrowRight />
                                         </div>
                                      </div>
                                    </div>
                                  </div>     
                                </div>
                            )
                        })
                     }
                  </div>

              )
            } )
          }
        </div>
  )
}

export default WorkSlider