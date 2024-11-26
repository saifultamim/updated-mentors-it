import Image from 'next/image';
import React from 'react';
import guarantee from '@/public/images/home/guarantee.png';
import record from '@/public/images/home/record.png';
import good_quality from '@/public/images/home/good_quality.png';

const data = [
  { id: 1, title: <>INDUSTRY EXPERT <br />MENTOR</>, img: guarantee, color: '#505050' },
  { id: 2, title: <>LIVE <br />SUPPORT</>, img: record, color: '#ED1C24' },
  { id: 3, title: <>QUALITY <br />TRAINING</>, img: good_quality, color: '#505050' },
];

const Why_choose_us = () => {
  return (
    <div className="relative bg-black mt-20">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-11/12 lg:w-10/12  mx-auto items-center gap-6  lg:gap-0">
        <p className="jaro text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] uws:text-[60px] px-4 lg:px-2 text-center lg:text-left text-white">
          Why Choose Us
        </p>
        {/* Cards Section */}
        <div className="flex  xs:flex-row flex-col sm:flex-row justify-center gap-0">
          {data.map((params, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: params.color }}
              className={`grid items-center justify-center text-center 
                
                w-[100px] sm:w-[140px] md:w-[240px] lg:w-[210px] uws:w-[500px] 
                h-[100px] sm:h-[120px] md:h-[150px] lg:h-[148px] uws:h-[450px] py-4`}
            >
              <div>
                <Image
                  alt="home"
                  src={params.img}
                  width={33}
                  height={33}
                  className="mx-auto w-8 sm:w-10 md:w-16 lg:w-10 uws:w-[100px]"
                />
                <p
                  className={`text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] uws:text-[44px] uws:leading-10
                    text-white momCake mt-2`}
                >
                  {params.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scholarship Section */}
      <div className="relative h-[20px] sm:h-[25px] md:h-[30px] lg:h-[35px] uws:h-[40px] bg-red-500 flex items-center justify-center ">
        <div className="absolute xs:-mt-1 -mt-6 md:-mt-1 lg:-mt-1 xs:px-2 xs:-ml-4 lg:-ml-16 md:px-4 w-full  flex flex-row justify-between items-center gap-4 lg:w-10/12 ">
          <Image
            alt="gift"
            src="/images/home/mentors/gift.png"
            width={285}
            height={152}
            className="w-16 sm:w-20 md:w-[180px] lg:w-[285px] uws:w-[400px] xs:mt-3  md:mt-10 lg:mt-12"
          />
          <p
            className={`jaro text-center text-white 
              text-[8px] sm:text-[10px] md:text-[16px] lg:text-[16px] uws:text-[28px]`}
          >
            APPLY FOR SCHOLARSHIP TO AVAIL UP TO 50% DISCOUNT ON ANY COURSE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why_choose_us;
