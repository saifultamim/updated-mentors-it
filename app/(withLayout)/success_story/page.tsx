import Image from 'next/image';
import React from 'react';
import success_story from '@/public/images/success_story/success_story.png'
import student from '@/public/images/success_story/student.png'
const success_story_data = [
    {
        id:1,
        name:'Sakib Shariar',
        role:'Student',
        description:'I wanted to feedback on the totally brilliant Assertiveness skills course I attended last week.  It has changed both my work and personal life in such a positive way already.  I have been able to employ the skills and tips I learnt, with great results almost immediately. Warren was very knowledgeable and was  able to tailor the whole day to our individual needs as there were only two of us attending on that day. The experience with Total Success from start to finish was faultless. I can see why your company is called this name! I have recommended the course to some of my colleagues.'
    },
    {
        id:2,
        name:'Sakib Shariar',
        role:'Student',
        description:'I wanted to feedback on the totally brilliant Assertiveness skills course I attended last week.  It has changed both my work and personal life in such a positive way already.  I have been able to employ the skills and tips I learnt, with great results almost immediately. Warren was very knowledgeable and was  able to tailor the whole day to our individual needs as there were only two of us attending on that day. The experience with Total Success from start to finish was faultless. I can see why your company is called this name! I have recommended the course to some of my colleagues.'
    },
    {
        id:3,
        name:'Sakib Shariar',
        role:'Student',
        description:'I wanted to feedback on the totally brilliant Assertiveness skills course I attended last week.  It has changed both my work and personal life in such a positive way already.  I have been able to employ the skills and tips I learnt, with great results almost immediately. Warren was very knowledgeable and was  able to tailor the whole day to our individual needs as there were only two of us attending on that day. The experience with Total Success from start to finish was faultless. I can see why your company is called this name! I have recommended the course to some of my colleagues.'
    },
    {
        id:4,
        name:'Sakib Shariar',
        role:'Student',
        description:'I wanted to feedback on the totally brilliant Assertiveness skills course I attended last week.  It has changed both my work and personal life in such a positive way already.  I have been able to employ the skills and tips I learnt, with great results almost immediately. Warren was very knowledgeable and was  able to tailor the whole day to our individual needs as there were only two of us attending on that day. The experience with Total Success from start to finish was faultless. I can see why your company is called this name! I have recommended the course to some of my colleagues.'
    },
    {
        id:5,
        name:'Sakib Shariar',
        role:'Student',
        description:'I wanted to feedback on the totally brilliant Assertiveness skills course I attended last week.  It has changed both my work and personal life in such a positive way already.  I have been able to employ the skills and tips I learnt, with great results almost immediately. Warren was very knowledgeable and was  able to tailor the whole day to our individual needs as there were only two of us attending on that day. The experience with Total Success from start to finish was faultless. I can see why your company is called this name! I have recommended the course to some of my colleagues.'
    },
    {
        id:6,
        name:'Sakib Shariar',
        role:'Student',
        description:'I wanted to feedback on the totally brilliant Assertiveness skills course I attended last week.  It has changed both my work and personal life in such a positive way already.  I have been able to employ the skills and tips I learnt, with great results almost immediately. Warren was very knowledgeable and was  able to tailor the whole day to our individual needs as there were only two of us attending on that day. The experience with Total Success from start to finish was faultless. I can see why your company is called this name! I have recommended the course to some of my colleagues.'
    },
]
const page = () => {
    return (
        <div className='relative'>
             <Image
                alt='success_story' 
                src={success_story}
                width={1000} 
                height={200} 
               
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[550px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white'>
               <p className=''>Success Story</p>
                </div>
               <div className={`h-[20px] md:h-[25px] lg:h-[25px] uws:h-[35px] w-full bg-red-500`}>
      <div className='absolute -mt-2 md:-mt-11 lg:-mt-10 flex justify-around lg:gap-60 items-center w-full'>
      <Image alt='gift' src='/images/home/mentors/gift.png' width={285} height={152} className=" w-24 md:w-[285px] lg:w-[285px]" />
      <p className='-mt-4 md:-mt-9 lg:-mt-12 jaro xs:text-[8px] sm:text-[10px] md:text-[16px] lg:text-[18px] exl:text-[24px] uws:text-[30px] text-white '>APPLY FOR SCHOLARSHIP TO AVAIL UP TO 50% DISCOUNT ON ANY COURSE</p>
      </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-16 items-center mx-auto'>
  {
    success_story_data.map((params, idx) => (
      <div key={idx} className='flex justify-center mt-16'>
        <div className=' bg-[#D9D9D9] xs:h-[450px] sm:h-[450px] md:h-[585px] lg:h-[585px] xs:w-36 sm:w-48 md:w-60 lg:w-80 exl:w-[350px] exl:h-[585px]  uws:h-[900px] uws:w-[600px] rounded-3xl flex flex-col items-center exl:py-8 justify-center text-center md:p-4 lg:p-4'>
          {/* Centered Image */}
          <Image 
            alt='role' 
            src={student} 
            height={104} 
            width={104}  
            className='w-[80px] h-[80px] sm:w-[90px] md:w-[104px] md:h-[104px] lg:w-[104px] lg:h-[104px] exl:w-[150px] exl:h-[150px]  rounded-full object-cover mb-4' 
          />
          {/* Centered Text */}
          <p className='text-[14px] exl:text-[25px] montserat text-black font-bold mb-2'>{params.name}</p>
          <p className='text-[12px] exl:text-[20px] montserat font-normal mb-2'>{params.role}</p>
          <p className="font-montserrat text-[9px] exl:text-[12px] uws:text-[20px] md:text-[12px] lg:text-[12px] font-normal leading-[13.2px] exl:leading-[20px]  uws:leading-[30px]  text-center lg:w-52 exl:w-5/6 exl:h-full">{params.description}</p>
        </div>
      </div>
    ))
  }
</div>

        </div>
    );
};

export default page;