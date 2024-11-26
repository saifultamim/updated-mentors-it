import Image from 'next/image';
import React from 'react';
import guarantee from '@/public/images/home/guarantee.png'
import record from '@/public/images/home/record.png'
import good_quality from '@/public/images/home/good_quality.png'

const  data = [
    {id:1,title:(<>INDUSTRY EXPERT <br/>MENTOR</>),img:guarantee,color:'#505050'},
    {id:2,title:(<>LIVE <br/>SUPPORT</>),img:record,color:'#ED1C24'},
    {id:3,title:(<>QUALITY <br/>TRAINING</>),img:good_quality,color:'#505050'},
]

const Why_us = () => {
    return (
        <div className=' flex justify-center  '>
         {
            data.map((params,idx)=>(
               
                     <div key={idx} 
                     style={{ backgroundColor: params.color }}
                     className={`lg:w-[300px] uws:w-[500px] md:h-[200px] lg:h-[262px] uws:h-[450px] grid items-center justify-center text-center w-24 sm:w-28 md:w-60 py-4 md:py-0 lg:py-0 `}>
            <div>
            <Image alt='home' src={params.img} width={60} height={60} className=' mx-auto w-8 md:w-16 lg:w-16' />
            <p className=' text-[10px] md:text-[20px] lg:text-[36px] text-white momCake    leading-1 sm:leading-1 md:leading-7 lg:leading-7 exl:leading-7 uws:leading-7  mt-2'>{params.title}</p>
            </div>
            </div>
                
            ))
         }
        </div>
    );
};

export default Why_us;
