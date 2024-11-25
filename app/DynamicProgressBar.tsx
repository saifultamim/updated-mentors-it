import React from 'react';

interface ProgressBarProps {
  progress: number; // Accepts progress value between 0 to 100
}

const getColor = (progress: number): string => {
  if (progress < 40) return 'bg-red-500';
  if (progress < 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

const DynamicProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="border border-red-600   mx-auto gap-8">
        {/* Progress Text */}
        <div className='flex  items-center '>
          <p>Course Completion</p>
        <div className=" text-sm font-medium">
        {progress}% 
      </div>
        </div>
      {/* Progress Bar Container */}
      <div className="w-full  bg-gray-300 rounded-full h-1 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${getColor(progress)}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
};

export default DynamicProgressBar;
