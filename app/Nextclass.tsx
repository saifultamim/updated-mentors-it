import React from "react";
import clock from '@/public/images/clock.png'
import Image from "next/image";



const Nextclass = ({ time = "10:00 PM", day = "TODAY" }) => {
  return (
    <div className="relative w-56 h-56 rounded-full border-8 border-red-500 flex flex-col justify-center items-center bg-white shadow-lg shadow-red-600">
      {/* Clock Icon */}
      <div className="absolute top-2 left-2 w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full">
        <Image alt='clock' src={clock} width={60} height={60} />
      </div>
      {/* Text */}
      <div className="text-center space-y-0">
        <p className="text-gray-700 leading-[1px] text-sm font-semibold ">YOUR NEXT CLASS</p>
        <p className="text-red-500 text-lg font-bold  leading-none" >{day}</p>
        <p className= "text-black text-3xl font-extrabold">{time}</p>
      </div>
    </div>
  );
};

export default Nextclass;
