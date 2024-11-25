'use client';

import React, { useEffect, useState } from 'react';
import DynamicProgressBar from './DynamicProgressBar';
import Image from 'next/image';
import Nextclass from './Nextclass';


export   const Home: React.FC = () => {
  const [progress, setProgress] = useState(57);
  const [progress2, setProgress2] = useState(80);
  // useEffect(() => {
  //   // Simulating dynamic progress (e.g., API fetch or state update)
  //   const timer = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) return 100; // Stop at 100%
  //       return prev + 5; // Increment progress
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer); // Cleanup interval
  // }, []);

  return (
 <div>
  <p className='text-[36px] start'>10:00 PM</p>
 </div>
  );
};

export default Home;
