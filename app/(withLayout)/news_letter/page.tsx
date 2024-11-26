import Image from 'next/image';
import React from 'react';
import news_letter from '@/public/images/news_letter/news_letter.png'
import { news_letter_data } from './news_letter_data';

const page = () => {
    return (
        <div className="relative mx-auto bg-white">
        <Image
                alt='success_story' 
                src={news_letter}
                width={1000} 
                height={200} 
               quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[600px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white'>
               <p className=''>newsletter</p>
                </div>


              {/* news letter */}
              <div className='bg-white xs:w-10/12 sm:10/12 w-7/12 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 exl:grid-cols-2  uws:grid-cols-2 mx-auto'>
              {
                news_letter_data?.map((params,idx)=>(<div key={idx} className='w-11/12 h-[130px] uws:h-[200px] shadow-[#878787] shadow-md mt-8 mb-8 px-4 flex flex-col justify-center rounded-[5px] mx-auto'>
                <p className=' xs:text-[20px] md:text-[25px] text-[32px] uws:text-[48px]  jaro xs:leading-[15px]  leading-[32px] uws:leading-[40px] text-[#ED1C24]'>{params.title}</p>
                <p className='text-[12px] montserat uws:text-[24px]'>{params.description}</p>
                </div>))
              }
              </div>
                </div>
    );
};

export default page; 