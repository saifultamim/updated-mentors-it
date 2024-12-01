import React from 'react';
import courses from '@/public/images/courses/courses.png'
import Image from 'next/image';
import Future_career from '../_comp/Future_career/Future_career';
// import Courses from '../_comp/Courses/Courses';
import video from '@/public/images/home/marketplace/video.png'
import Carousel from './carousel';
import Why_choose_us from '@/shared_comp/Why_choose_us/Why_choose_us';
// const cardData = [
//     {
//       id: 1,
//       title: (<> DIGITAL1 <br /> MARKETING </>),
//       subtitle: "Mastery",
//       level: "Level 3",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 2,
//       title: (<> DIGITAL2 <br /> MARKETING </>),
//       subtitle: "Intermediate",
//       level: "Level 2",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 3,
//       title: (<> DIGITAL3 <br /> MARKETING </>),
//       subtitle: "Beginner",
//       level: "Level 1",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 4,
//       title: (<> DIGITAL4 <br /> MARKETING </>),
//       subtitle: "Advanced",
//       level: "Level 4",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 5,
//       title: (<> DIGITAL5 <br /> MARKETING </>),
//       subtitle: "Expert",
//       level: "Level 5",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 6,
//       title: (<> DIGITAL6 <br /> MARKETING </>),
//       subtitle: "Expert",
//       level: "Level 5",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 7,
//       title: (<> DIGITAL7 <br /> MARKETING </>),
//       subtitle: "Mastery",
//       level: "Level 3",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 8,
//       title: (<> DIGITAL8 <br /> MARKETING </>),
//       subtitle: "Intermediate",
//       level: "Level 2",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 9,
//       title: (<> DIGITAL9 <br /> MARKETING </>),
//       subtitle: "Beginner",
//       level: "Level 1",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 10,
//       title: (<> DIGITAL10 <br /> MARKETING </>),
//       subtitle: "Advanced",
//       level: "Level 4",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//       id: 11,
//       title: (<> DIGITAL11 <br /> MARKETING </>),
//       subtitle: "Expert",
//       level: "Level 5",
//       imageSrc: "/images/home/courses/digital_marketing2.png"
//     },
//     {
//         id: 12,
//         title: (<> DIGITAL12 <br /> MARKETING </>),
//         subtitle: "Expert",
//         level: "Level 5",
//         imageSrc: "/images/home/courses/digital_marketing2.png"
//       },
//       {
//           id: 13,
//           title: (<> DIGITAL13 <br /> MARKETING </>),
//           subtitle: "Expert",
//           level: "Level 13",
//           imageSrc: "/images/home/courses/digital_marketing2.png"
//         }
//   ];
  
const page = () => {
    return (
        <div className='relative'>
           <Image 
                alt='home' 
                src={courses}
                width={1000} 
                height={200} 
                quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[700px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white'>
               <p className=''>Who We Are</p>
                </div>
          <div>
            <Future_career></Future_career>
          </div>
          <div>
          {/* <Courses cards={cardData} showCarousel={false}></Courses> */}
            {/* <Courses ></Courses> */}
            <Carousel></Carousel>
            <Why_choose_us></Why_choose_us>
            <div className='mt-28 md:mt-32 lg:mt-72 '>
                <Image alt='video' src={video} height={50} width={900}  className=' w-5/6 md:w-4/6 lg:w-4/6 mx-auto border-4 border-white ' />
            </div>
            </div>
        </div>
    );
};

export default page;