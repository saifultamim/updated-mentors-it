import React from 'react';
import about_us from '@/public/images/about_us/about_us.png'
import Image from 'next/image';
import Why_us from '@/shared_comp/Why_us/Why_us';
import Mentors from '@/shared_comp/Mentors/Mentors';
import Future_career from '../_comp/Future_career/Future_career';
import Gallery from '@/shared_comp/Gallery/Gallery';
import video from '@/public/images/home/marketplace/video.png'

const page = () => {
    return (
        <div className='relative'>
            <Image 
                alt='home' 
                src={about_us}
                width={1000} 
                height={200} 
                quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[700px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white'>
               <p className=''>Who We Are</p>
                </div>
           <div className='absolute -mt-12 md:-mt-28 lg:-mt-28 w-full'>
           <Why_us></Why_us>
           </div>
           <div className='pt-16'>
            <Future_career></Future_career>
           </div>
           <div>
            <Mentors bool={false}></Mentors>
           </div>
           <div className='mt-28 md:mt-32 lg:mt-72 '>
                <Image alt='video' src={video} height={50} width={900}  className=' w-5/6 md:w-4/6 lg:w-4/6 mx-auto border-4 border-white ' />
            </div>
           <div className='mt-20 md:mt-36 lg:mt-36'>
            <Gallery bool={false}></Gallery>
           </div>
        </div>
    );
};

export default page;