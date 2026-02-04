import React, { useState } from 'react';
import './../../AnimatedBorder.css'
import { GoDash } from "react-icons/go";

const SquareDiv = ({ text, symbol, ptext }) => {

  return (
    <div className="card md:ml-20 ml-6 lg:ml-52 xl:ml-0">
        <div className="flex">
          <h2 className="xl:h2 text-[30px] text-accent mb-0 ml-20 pt-[30px]">{text}</h2>
          <h2 className="xl:h2 text-[30px] text-accent mb-0 pt-[20px]">{symbol}</h2>
        </div>
        <div className="flex text-white">
          <GoDash className="mb-0 w-12 h-16 ml-20 xl:-mt-8 -mt-[10px]"/>
          <p className="mb-0 text-white mt-[5px] xl:-mt-4 font-bold text-[20px]">{ptext}</p>
        </div>
      </div>
  );
};

export default SquareDiv;
