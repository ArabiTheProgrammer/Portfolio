import React from 'react'
import './../../AnimatedBorder.css'
import { GoDash } from "react-icons/go";

const SquareDiv2 = ({ text, symbol, ptext }) => {
  return (
    <div className="card2 xl:mt-0 mt-3 ml-5">
        <div className="flex">
            <h2 className="xl:h2 text-[30px] text-accent mb-0 ml-20 pt-[30px]">{text}</h2>
            <h2 className="xl:h2 text-[30px] text-accent mb-0 pt-[20px]">{symbol}</h2>
        </div>
            <div className="flex text-white">
              <GoDash className="mb-0 w-12 h-16 xl:-mt-8 ml-20 -mt-[10px]"/>
            <p className="mb-0 text-white mt-[5px] xl:-mt-4 font-bold text-[20px]">{ptext}</p>
        </div>
    </div>
  )
}

export default SquareDiv2