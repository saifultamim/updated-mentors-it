import React from 'react';
import { IoIosRadio } from "react-icons/io";
import logo from '@/public/images/footer/logo.png'
import Image from 'next/image';
// <IoIosRadio />
const Mentor = () => {
    return (
     
         <div className='bg-[#ED1C24] h-[391px] relative'>

        <div className='  w-10/12 h-full mx-auto flex justify-between items-center  montserat'>
         <Image alt='logo' src={logo} height={63} width={179} className='w-24 lg:w-72 uws:w-96' />
       <div className=' text-right leading-4 lg:leading-10 text-white'>
       <div>
       <div className=' flex justify-end '> <IoIosRadio className=" text-5xl"/></div>
        <h3 className=' text-[20px] lg:text-[40px] font-semibold'>LIVE SUPPORT</h3>
        <p className='text-[12px] lg:text-[24px]  font-normal'>Bony Amin Foysal</p>
        </div>
        <button className='text-[10px] lg:text-[20px] font-bold bg-black h-14 px-5 rounded-[5px] shadow-white shadow-lg  translate-y-36'> 
            Room Link Submission
        </button>
       </div>
         </div>
           
        </div>
      
    );
};

export default Mentor;