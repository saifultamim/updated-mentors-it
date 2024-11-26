import Image from 'next/image';
import React from 'react';
import mentors_img from '@/public/images/home/mentors/mentors.png'
import mentors from '@/public/images/home/mentors/one.png'
import Mentors from '@/shared_comp/Mentors/Mentors';
import { mentors_data } from './mentors_data';

const page = () => {
    return (
        <div className="relative mx-auto ">
        <Image
                alt='success_story' 
                src={mentors_img}
                width={1000} 
                height={200} 
               quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[600px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white'>
               <p className=''>mentors</p>
                </div>


                {/* ======================================= */}
                <div className='mb-24'>
                    <Mentors bool={false} scholarship = {false}></Mentors>
                </div>
                {/* ========================================== */}
                      
                      {/* =============================== */}
                      <div className=' w-9/12 mx-auto mt-40 grid xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg: grid-cols-4 exl:grid-cols-4 uws:grid-cols-4'>
                    {
                        mentors_data?.map((params,idx)=>(
                             <div key={idx}
                            className={'w-11/12 xs:h-[200px] md:h-[250px] lg:h-[465px] uws:h-[650px] text-center xs:mt-1 mt-8'}
                          >
                             <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 lg:w-60 lg:h-60 uws:h-96 uws:w-96 bg-red-500 overflow-visible rounded-full mx-auto">
                              {/* Image positioned absolutely */}
                              <Image
                                src={params.img}
                                alt={params.name}
                                width={200}
                                height={200}
                                className="absolute -top-3 md:-top-4 lg:-top-16  uws:-top-12 lg:w-72 lg:h-80 uws:w-[450px] uws:h-[450px]" // Adjust -top-4 as needed for positioning
                              />
                            </div>
                            <h3 className="text-black  md:text-[22px] lg:text-[36px] mt-4 lg:mt-8 uws:text-[50px] jaro">
                              {params.name}
                            </h3>
                            <p className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none">
                              {params.role} <br /> {params.field}
                            </p>
                          </div>))
                    }
                      </div>
                      {/* ================================ */}


                </div>
    );
};

export default page;