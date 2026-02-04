import React from 'react'
import Images from './Images'
import Circle from '../../../public/circles.png'

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] fixed xl:-right-16 xl:-bottom-2 -right-1 -bottom-1 mix-blend-color-dodge animate-pulse duration-75 z-[5]">
        <Images className="w-full max-w-[260px] max-h-[200px]" src={Circle} alt="Circle.png" />
    </div>
  )
}

export default Circles