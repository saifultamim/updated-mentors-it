import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/footer/logo.png'
import facebook from '@/public/images/footer/facebook.png'
import linkedin from '@/public/images/footer/linkedin.png'
import youtube from '@/public/images/footer/youtube.png'
import dbsl from '@/public/images/footer/dbsl.png'
import education from '@/public/images/footer/education.png'
import asset from '@/public/images/footer/asset.png'
import basis from '@/public/images/footer/basis.png'
import nsdab from '@/public/images/footer/nsdab.png'
import Link from 'next/link';
const images1 = [
    {img:facebook},
    {img:linkedin},
    {img:youtube}
]
const images2 = [
    {img:nsdab},
    {img:education},
    {img:asset},
    {img:dbsl},
    {img:basis},
]
const Footer = () => {
    return (
        <div className=' w-full bg-black'>
            
            <div className=' text-white  xs:w-6/6 sm:w-5/6 md:w-5/6 lg:w-5/6  h-auto lg:h-[288px] uws:h-[340px] bg-black grid    md:grid-cols-2 lg:grid-cols-3 mx-auto xs:px-3 px-4 lg:px-0 pt-8 pb-8 lg:pt-0 lg:pb-0 uws:pb-8 items-center'>
            <div  className=''>
              <Image alt='logo' src={logo} height={63} width={169} className='uws:w-96' />
              <p className='w-[306px]  leading-[16.9px] uws:leading-[24px] text-[14px] uws:text-[24px] inter mt-2'>At MentorsIT, we prioritize hands-on learning, guided by experienced mentors who bring real-world insights into every class.</p>
              <div className='flex mt-5 gap-4'>
             {
                images1.map((params,idx)=>(<div key={idx}>
                     <Link href='#' >
                     <Image alt='logo' src={params.img} height={30} width={30} className='uws:w-12' />
                     </Link>
                </div>))
             }
              </div>
            </div>
             
            <div className='flex flex-col  montserat font-normal  mt-3 md:mt-0 lg:mt-0 xs:text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] exl:text-[16px] leading-[22.08px]  uws:text-[28px] uws:leading-[40px]'>
                <p className='montserat font-bold text-[20px] uws:text-[35px] text-red-600 leading-[27.6px]'>LINKS</p>
              
                <Link href='#' className='  hover:underline'>COURSES</Link>
                <Link href='#' className=' hover:underline'>NEWSLETTER</Link>
                <Link href='#' className=' hover:underline'>ABOUT US</Link>
                <Link href='#' className='  hover:underline'>CONTACT US</Link>
                <Link href='#' className=' hover:underline'>MENTORS</Link>
               
            </div>

            <div  className='  flex flex-col lg:items-end mt-4 lg:mt-0'>
               <div className='lg:text-right montserat font-normal uws:text-[24px]'>
                <p className=''>info@mentorsit.com</p>
                <p className=''>1/2 Outer Circular Road, Malibagh<br/>Dhaka-1217</p>
                <p className='montserat font-bold'>OUR PARTNERS</p>
               </div>
               <div className='flex bg-white border border-green-600   md:w-[448px] lg:w-[410px] uws:w-[550px] h-[47px] uws:h-[60px] items-center rounded-[10px] justify-around '>
                {
                images2.map((params,idx)=>(<div key={idx} className=''>
                    <Image alt='logo' src={params.img} height={20} width={63} className='uws:w-[100px]' />
                </div>))
                }
               </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;