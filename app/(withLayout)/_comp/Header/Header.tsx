import Why_us from '@/shared_comp/Why_us/Why_us';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <div className='relative  pb-20'>
            <Image 
                alt='home' 
                src='/images/home/home.png' 
                width={1000} 
                height={200} 
                quality={95}
                className='w-full h-[500px] md:h-[700px] lg:h-[930px]' 
            />

            {/* Overlay content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white mt-8 md:mt-0 lg:mt-6'>
                <div className='  leading-none -mt-20 md:-mt-4 lg:-mt-4'>
                    <p className=' font-semibold md:[text-20px] lg:text-[20px]  jaro'>Journey of your career</p>
                    <p className='text-[50px] md:text-[110px] lg:text-[128px] mr-dafoe-regular regularBrush'>starts here</p>
                </div>

                {/* dotted */}
                <div className="flex flex-col items-center">
  <div className="border-l-4 border-dotted border-white  h-14 lg:h-24 lg:mt-8"></div>
  <div className="text-xl text-white ">
    <IoIosArrowDown/>
  </div>
</div>


                <div className='bg-[#ED1C24] p-4  z-10  w-5/6 lg:w-2/3 mt-2 md:mt-0  lg:mt-0 md:h-[280px] lg:h-[325px] '>
                    <p className='font-bold text-[24px] md:text-[32px] lg:text-[64px] kickstart-text regularBrush'>Kick start your future</p>
                    <p className='text-sm mb-4  montserrat'>
                    Pursue your passion and get a real-world education in Trendy Skillset<br/>
                    in any of our 30+ Short Course & Mastery programs.
                    </p>
                    
                    <div className="relative flex w-full ">
  <input
    type="text"
    placeholder="Find Courses Just the Way you like"
    className="p-2 rounded h-[52px] md:h-[63px] lg:h-[63px] px-4  placeholder:text-[12px] md:placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:montserrat placeholder:text-black w-full pr-12"
  />
  <IoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black w-[20px] md:w-[24px] lg:w-[30px] h-[30px]" />
</div>

                </div>
            </div>

            {/* Black section */}
            <div className='relative bg-black h-28 md:h-[267px] lg:h-[267px] w-full  flex justify-center'>
                {/* Why_us section with responsive positioning */}
                {/* <div className='absolute md:-ml-5 left-1/2 transform -translate-x-1/2 w-5/6 
                    top-1/2  border border-yellow-600 flex justify-center'>
                    <Why_us />
                </div> */}
                <div className=' absolute mt-16 md:mt-36 lg:mt-36 '>
                    <Why_us />
                </div>
            </div>
        </div>
    );
};

export default Header;