import React from 'react';
import Image from 'next/image';
import { FaComment } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { timeline } from '@/utils/types';

const Timeline = ({params}:{params:timeline}) => {
    return (
        <div className='bg-blue-600 relative rounded-[14px]'>
         
            <div className='flex text-[12px] montserrat  items-center   px-6 gap-8'>
                <Image alt='student' src={params.img} width={80} height={80} className='-mt-5' />
                <div className=''>
                    <p className='text-[15px] font-semibold text-red-600 '>{params.stu_name || params.mentor_name}</p>
                    <p className='leading-1'>{params.stu_level || params.mentor_designation}</p>
                    <p className='leading-1'>{params.stu_id || ''}</p>
                </div>
                </div>
         
                <div className='montserrat text-[12px] mt-3  px-6 leading-3'>
                  <p>{params.des1}</p>
                  <p>{params.des2 || ''}</p>
                </div>
               {
               params.cPanelImg?  <Image alt='cpanel' src={params.cPanelImg } width={250} height={60} quality={95} className=' h-[250px] w-full px-8' /> : ''
               }
                {/* red zone */}
                <div className='bg-red-600 flex w-full rounded-full mt-3 montserrat items-center h-6 justify-around'>
                    <div className='flex items-center gap-2'>
                    <IoIosArrowDropupCircle className='text-white w-6' />
                    <p className='text-[12px]'>Upvote</p>
                    </div>
                <div className='flex items-center gap-2'>
                <FaComment className='text-white w-6' />
                <p className='text-[12px]'>Comment</p>
                </div>
               <div className='text-[10px] flex items-center gap-4'>
               <p>26.0.2024</p>
               <p>7.8PM</p>
               </div>
              </div>

        </div>
    );
};

export default Timeline;