import Image from 'next/image';
import React from 'react';
import course from '@/public/images/courses/course/course.png';
import digital_marketing from '@/public/images/home/courses/digital_marketing1.png';
import { courseDetails, expert, learn, question, requirements } from './course_data';
import { IoCheckmark } from "react-icons/io5";
import Carousel from './carousel';
import Why_choose_us from '@/shared_comp/Why_choose_us/Why_choose_us';

const page = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className='relative bg-black'>
                <Image
                    alt='course'
                    src={course}
                    width={1000}
                    height={200}
                    className='w-full h-[200px] xs:h-[300px] md:h-[453px] lg:h-[453px]'
                />

                {/* Main Container */}
                <div className='w-11/12 mx-auto md:w-5/6'>

                    {/* Section 1: Course Overview */}
                    <div className='flex  lg:flex-row exl:flex-row uws:flex-row md:flex-col sm:flex-col xs:flex-col  gap-8 justify-center items-end lg:-mt-48'>
                        {/* Digital Marketing Image */}
                        <div className='w-[250px] xs:w-full md:w-[300px] lg:w-[450px] lg:h-[600px] uws:w-[800px] uws:h-[970px] h-auto pb-8 border-b-4 border-red-600 mx-auto'>
                            <div className='bg-black border-2 border-white rounded-[18px] px-4 py-8'>
                                <Image
                                    alt='digital_marketing'
                                    src={digital_marketing}
                                    width={300}
                                    height={950}
                                    className='w-full h-auto lg:h-[500px] uws:h-[850px]'
                                />
                            </div>
                        </div>

                       
                       {/* Course Details */}
<div className="bg-red-600 text-white w-full md:w-full h-auto py-6 flex flex-col lg:flex-row justify-between items-end rounded-[18px] ">
  <div className="w-full">
    <p className="bg-black px-4 py-2 w-fit montserat font-semibold text-[16px] md:text-[20px] rounded-tr-[12px] rounded-br-[12px] uws:text-[30px]">
      COURSE DETAILS
    </p>
    <div className="grid xs:pl-0 sm:pl-0 md:pl-4 lg:pl-4 exl:pl-4 uws:pl-4  gap-4">
      {courseDetails?.map((params, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <Image
            alt="courseDetails"
            src={params.img}
            width={40}
            height={30}
            className="w-12 h-12"
          />
          <p className="montserat text-[12px] md:text-[14px] uws:text-[36px] font-semibold">
            {params.title1} <br />
            {params.title2}
          </p>
        </div>
      ))}
      <button className="bg-black text-white w-full md:w-[262px] py-2 text-[16px] md:text-[20px] rounded-[6px]  uws:text-[36px] mt-6">
        Enroll now
      </button>
    </div>
  </div>
  <div className="text-left pr-4 mt-6 md:mt-0 lg:text-right lg:pr-12 w-full">
    <p className="jaro text-[32px] md:text-[50px] uws:text-[75px] xs:leading-[30px] md:leading-10 uws:leading-[60px]">DIGITAL <br /> MARKETING</p>
    <p className="text-[20px] md:text-[26px] text-black uws:text-[36px]">Mastery</p>
    <p className="montserat uws:text-[30px]">Level 3</p>
  </div>
</div>
</div>
                    {/* Section 2: What to Expect */}
                    <div className='bg-white py-6 flex flex-col items-start rounded-[18px] mt-8'>
                        <div className='w-11/12 mx-auto'>
                            <div className='flex items-center gap-4'>
                                <p className='jaro text-[24px] md:text-[32px] uws:text-[60px]'>What to Expect</p>
                                <h1 className='border-[1px] flex-grow border-black'></h1>
                            </div>
                            <div className='mt-4 text-black text-[14px] uws:text-[28px] montserat font-semibold'>
                                {expert?.map((params, idx) => (
                                    <div key={idx} className='flex items-center gap-4'>
                                        <div className='bg-red-600 w-4 h-4 uws:w-8 uws:h-8 text-white rounded-full flex items-center justify-center'>
                                            <IoCheckmark />
                                        </div>
                                        <p>{params.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3: What You'll Learn */}
                    <div className='bg-white py-6 flex flex-col rounded-[18px] mt-8'>
                        <div className='w-11/12 mx-auto'>
                            <p className='jaro text-[24px] md:text-[32px] uws:text-[60px]'>WHAT YOU’LL LEARN</p>
                            {learn?.map((params, idx) => (
                                <div key={idx} className='flex  gap-4 uws:text-[28px]'>
                                    <div className='bg-red-600 w-4 h-4 uws:w-8 uws:h-8 text-white rounded-full flex items-center justify-center'>
                                        <IoCheckmark />
                                    </div>
                                    <p>{params.title}</p>
                                </div>
                            ))}
                            <p className='jaro text-[24px] md:text-[32px] mt-8 uws:text-[60px]'>REQUIREMENTS</p>
                            {requirements?.map((params, idx) => (
                                <div key={idx} className='flex items-center gap-4'>
                                    <div className='bg-red-600 w-4 h-4 uws:w-8 uws:h-8   text-white rounded-full flex items-center justify-center'>
                                        <IoCheckmark />
                                    </div>
                                    <p className='uws:text-[28px]'>{params.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: FAQ */}
                    <div className='bg-white py-8 rounded-[18px] mt-8'>
                        <div className='w-11/12 mx-auto'>
                            <p className='jaro text-[24px] md:text-[32px] text-red-600 uws:text-[60px]'>FREQUENTLY ASKED QUESTIONS</p>
                            {question?.map((params, idx) => (
                                <div key={idx} className='flex gap-4 items-center h-12 bg-[#D9D9D9] rounded-[7px] mt-4 px-3'>
                                    <p className='montserat xs:text-[12px] lg:text-[16px] uws:text-[32px]'>{params.type}</p>
                                    <p className='montserat font-medium xs:text-[12px] lg:text-[20px] uws:text-[28px]'>{params.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Additional Components */}
            <Why_choose_us />
           
            </div>
            <Carousel />
            
            
        </div>
    );
};

export default page;
