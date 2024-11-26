import React from 'react';
import fiverr from '@/public/images/home/marketplace/fiverr.png'
import upwork from '@/public/images/home/marketplace/upwork.png'
import linkedin from '@/public/images/home/marketplace/linkedin.png'
import indeed from '@/public/images/home/marketplace/indeed.png'
import freelancer from '@/public/images/home/marketplace/freelancer.png'
import peopleperhour from '@/public/images/home/marketplace/peopleperhour.png'
import video from '@/public/images/home/marketplace/video.png'
import Image from 'next/image';
const marketplaceImages = [
    {
        id:1,
        img:fiverr
    },
    {
        id:2,
        img:upwork
    },
    {
        id:3,
        img:linkedin
    },
    {
        id:4,
        img:indeed
    },
    {
        id:5,
        img:freelancer
    },
    {
        id:6,
        img:peopleperhour
    },
]
const Marketplace = () => {
    return (
        <div className=' md:-mt-6 lg:mt-16 bg-black pb-16 '>
            <div>
            <p className='text-white text-[24px] uws:text-[30px] montserratMarketplace text-center'>TARGET MARKETPLACE</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-11/12  md:w-8/12 lg:w-10/12 exl:w-8/12 uws:w-8/12 mx-auto '>
            {
                marketplaceImages.map((image)=>(
                    <div key={image.id} className=' xs:w-24 md:w-28 lg:w-32 uws:w-48 uws:h-20 h-12 bg-white mx-auto rounded-lg 
                    md:space-x-9 mt-3 flex justify-center items-center '>
                    
                        <Image alt="marketplace" src={image.img}  width={50} height={50} className='w-24 md:w-28 lg:w-28 uws:w-40 uws:h-14 md:h-10 lg:h-10' />
                      
                    </div>
                ))
            }
            </div>
            <div className='mt-20 md:mt-32 lg:mt-32 '>
                <Image alt='video' src={video} height={50} width={950}  className=' w-5/6 md:w-4/6 lg:w-4/6 mx-auto border-4 border-white ' />
            </div>
            
        </div>
    );
};

export default Marketplace;