import React from 'react'
import Images from './layer/Images'
import Me from '../../public/avatar.jpeg'

const Avatar = ({className}) => {
  return (
    <div className={`xl:flex z-[5] xl:max-w-none ${className}`}>
      <Images className="w-full h-full translate-z-0" src={Me} alt="Avatar.jpeg"/>
    </div>
  )
}

export default Avatar