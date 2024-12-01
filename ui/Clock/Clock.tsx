import React from "react";
import clock from '@/public/images/student_panel/clock.png';
import Image from "next/image";

const Clock = ({ time = "10:00 PM", day = "TODAY" }) => {
  return (
    <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-full flex flex-col justify-center items-center bg-white shadow-lg shadow-red-600">
      {/* Clock Icon */}
      <div className="absolute -top-2 -left-1 flex items-center justify-center rounded-full">
        <Image alt="clock" src={clock} width={60} height={60} />
      </div>
      {/* Text */}
      <div className="text-center text-black space-y-1 sm:space-y-2">
        <p className="text-xs sm:text-sm md:text-base font-semibold Nord-Bold">
          YOUR NEXT CLASS
        </p>
        <p className="text-red-500 text-sm sm:text-lg md:text-xl font-bold Nord-Bold">
          {day}
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[4px]">
          {time}
        </p>
      </div>
    </div>
  );
};

export default Clock;

  
