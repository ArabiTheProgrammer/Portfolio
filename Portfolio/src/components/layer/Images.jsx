import React from 'react'
import { Link } from 'react-router-dom'

const Images = ({ href, src, alt, className, width, height }) => {
  return (
      <picture>
        <img width={width} height={height} className={className} src={src} alt={alt} />
      </picture>
  )
}

export default Images
