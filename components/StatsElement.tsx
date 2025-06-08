// *********************
// IN DEVELOPMENT
// *********************

import React from "react";
import { FaArrowUp } from "react-icons/fa6";


const StatsElement = () => {
  return (
    <div className="w-80 h-32 bg-blue-500 text-black flex flex-col justify-center items-center rounded-md max-md:w-full">
      <h4 className="text-xl text-black">New Products</h4>
      <p className="text-2xl text-black font-bold">2,230</p>
      <p className="text-black-300 flex gap-x-1 items-center"><FaArrowUp />12.5% Since last month</p>
    </div>
  );
};

export default StatsElement;
