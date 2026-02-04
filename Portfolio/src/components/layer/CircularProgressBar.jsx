import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const CircularProgressBar = ({ percentage, className }) => {
  const size = 80;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div variants={fadeIn ('up', 0.2)} initial="hidden" animate='show' exit='hidden' className={`xl:ml-0 md:ml-5 lg:ml-5 ${className}`} style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#333"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#DC143C"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        {percentage}%
      </div>
    </motion.div>
  );
};

export default CircularProgressBar;