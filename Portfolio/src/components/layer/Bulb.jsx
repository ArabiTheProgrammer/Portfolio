import React from 'react'
import Images from './Images'
import bulb from '../../../public/bulb.png'

const Bulb = () => {
  return (
    <div className="absolute -left-36 xl:top-[24rem] top-[30rem] rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Images width="260px" height="200px" className="w-full h-full" src={bulb} alt="Bulb.png"/>
    </div>
  )
}

export default Bulb