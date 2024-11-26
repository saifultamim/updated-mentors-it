import React from "react";
import clock from '@/public/images/student_panel/clock.png'
import Image from "next/image";



const Clock = ({ time = "10:00 PM", day = "TODAY" }) => {
    return (
        <div className="relative w-56 h-56 rounded-full  flex flex-col justify-center items-center bg-white shadow-lg shadow-red-600">
        {/* Clock Icon */}
        <div className="absolute -top-2 -left-1 flex items-center justify-center rounded-full">
          <Image alt='clock' src={clock} width={60} height={60} className='' />
        </div>
        {/* Text */}
        <div className="text-center text-black space-y-0">
          <p className=" text-[13px] font-semibold Nord-Bold ">YOUR NEXT CLASS</p>
          <p className="text-red-500 text-[20px] font-bold text-right Nord-Bold" >{day}</p>
          <p className= " text-[36px] Nord-Bold font-extrabold leading-[4px]">{time}</p>
        </div>
      </div>
    );
  };
  
  export default Clock;
  
