import React from 'react'

const Title = ({text, span, shadow, className}) => {
  return (
    <div>
      <div className="relative xl:-ml-20 uppercase flex items-center justify-center">
      <h1 className="h1 xl:text-[56px] text-white font-black absolute z-[5] ">{text}<span className="text-accent font-black">{span}</span></h1>
      <h1 className={`md:text-[60px] text-[35px] lg:text-[89px] lg:-top-[5.5rem] xl:-top-28 -top-16 xl:text-[110px] text-[hsl(0,0%,49%,.4)] absolute font-black ${className}`}>{shadow}</h1>
      </div>
    </div>
  )
}

export default Title