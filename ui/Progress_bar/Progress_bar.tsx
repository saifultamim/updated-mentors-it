import { progressBar } from '@/utils/types';
import React from 'react';

// const getColor = (progress: number): string => {
//     if (progress < 40) return 'bg-red-500';
//     if (progress < 70) return 'bg-yellow-500';
//     return 'bg-red-500';
//   };
  
const Progress_bar : React.FC<progressBar> = ({ progress }) => {
    return (
        
           <div className=" mx-auto gap-8 text-white">
        {/* Progress Text */}
        <div className='flex  items-center justify-between '>
          <p>Course Completion</p>
        <div className=" text-sm font-medium">
        {progress}% 
      </div>
        </div>
      {/* Progress Bar Container */}
      <div className="w-full rounded-full h-1 overflow-hidden">
        <div
        //  ${getColor(progress)}
          className={`h-full transition-all duration-300 bg-[#ED1C24]`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
     
    );
};

export default Progress_bar;