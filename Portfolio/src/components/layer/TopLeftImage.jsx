import React from 'react'
import Img from './../../../public/top-left-img.png'
import Images from './Images'

const TopLeftImage = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-[5] w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] ">
        <Images className="w-[200px] h-[200px] xl:w-[400px] xl:h-[400px]" src={Img} alt="Image.png" />
    </div>
  )
}

export default TopLeftImage