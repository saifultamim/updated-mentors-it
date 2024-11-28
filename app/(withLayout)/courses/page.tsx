import React from 'react';
import courses from '@/public/images/courses/courses.png'
import Image from 'next/image';
import Future_career from '../_comp/Future_career/Future_career';
import Courses from '../_comp/Courses/Courses';
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
          <div>
          <Image 
                alt='home' 
                src={courses}
                width={600} 
                height={200} 
                quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px]' 
            />
          </div>
          <div>
            <Future_career></Future_career>
          </div>
          <div>
          {/* <Courses cards={cardData} showCarousel={false}></Courses> */}
            <Courses ></Courses>
            </div>
        </div>
    );
};

export default page;