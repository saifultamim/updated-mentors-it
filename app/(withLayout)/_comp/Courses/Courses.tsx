'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: (<> DIGITAL1 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 3",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 2,
    title: (<> DIGITAL2 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 2",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 3,
    title: (<> DIGITAL3 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 1",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 4,
    title: (<> DIGITAL4 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 4",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 5,
    title: (<> DIGITAL5 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 6,
    title: (<> DIGITAL6 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 7,
    title: (<> DIGITAL7 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 8,
    title: (<> DIGITAL8 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 9,
    title: (<> DIGITAL9 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 10,
    title: (<> DIGITAL10 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 11,
    title: (<> DIGITAL11 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  // Add more cards as needed
];

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cardData.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length - 2) % (cardData.length - 2));
  };

  // Get 3 cards to show at a time
  const displayedCards = cardData.slice(currentIndex, currentIndex + 3);

  return (
    // first container
    <div className=' mt-16 h-[800px] md:h-[600px] lg:h-[745px] bg-black uws:h-[950px]   flex justify-center'>
      {/* second container */}
     <div className='flex flex-col md:flex-row lg:flex-row items-end absolute -mt-6 lg:-mt-10   '>
       {/* First section with a static card */}
       <div className='border-b-4 border-b-[#DA0041] w-72 mx-auto md:w-full lg:w-[302px] h-[520px] lg:h-[580px] uws:w-[600px] uws:h-[850px] '>
        <div className='lg:w-[302px] h-[500px] lg:h-[529px] border-2 border-white p-3 bg-black rounded-[13px] uws:w-[600px] uws:h-[800px] '>
          <Image
            alt='digital_marketing1'
            src='/images/home/courses/digital_marketing1.png'
            width={376}
            height={272}
            className='h-96 md:h-[360px] lg:h-96 uws:w-full uws:h-[580px]'
          />
          <div className='text-white absolute -mt-16 lg:-mt-20'>
            <p className=' text-[19px] md:text-[30px] lg:text-[40px] uws:text-[50px] leading-none jaro'>DIGITAL <br/>MARKETING </p>
            <p className='text-[14px]  mx:text-[16px] lg:text-[16px] uws:text-[20px] leading-none montserrat'>Mastery</p>
            <p className='md:text-[15px] lg:text-[20px]  uws:text-[24px] mt-4 montserrat'>Level 3</p>
            <button className="w-52 lg:w-[262px] h-[40px] uws:h-[60px] uws:text-[30px] rounded-[6px]  bg-[#ED1C24] mt-4 jaro">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Second section - Carousel */}
       <div className='md:space-x-4 lg:space-x-8'>
         {/* Header Section */}
         <div className=" text-white text-left mb-4">
    <div  className="text-2xl font-bold w-fit ml-4 lg:ml-8 flex items-center">
    <p className='md:text-[36px] lg:text-[48px] uws:text-[56px] montserrat'>Courses <span className='text-[12.45px] uws:text-[17px]'>We Offer</span></p>
    </div>
  </div>

        {/* Carousel Navigation */}
        <div className="flex items-center mb-6 space-x-4 px-4 md:px-3 lg:px-0 ">
          <button onClick={handlePrev} className="bg-red-600 text-white p-2 rounded-full">
            <FaArrowLeft className="text-black uws:text-[60px]" />
          </button>
          <button onClick={handleNext} className="bg-red-600 text-white p-2 rounded-full">
            <FaArrowRight className="text-black uws:text-[60px]" />
          </button>
        </div>
      <div className="border border-black mt-3  bg-black flex flex-col items-center">
      

        {/* Card Display */}
        <div className="w-full flex justify-center space-x-2  md:space-x-4 lg:space-x-4 px-4 md:px-3  lg:px-0 ">
          {/* Show the 3 cards at a time */}
          {displayedCards.map((card) => (
            <div key={card.id} className=" lg:w-[200px] lg:h-[347px] exl:w-[300px] md:h-48 p-1 md:p-4 lg:p-4 bg-white rounded-[10px] lg:rounded-[18px] uws:w-[450px] uws:h-[500px]">
              <Image
                alt={`Card ${card.id}`}
                src={card.imageSrc}
                width={262}
                height={202}
                className="w-full h-auto"
              />
              <div className="mt-4 text-black ">
                <p className=" text-8 md:text-lg leading-none md:leading-none lg:text-[32px] jaro">{card.title}</p>
               <div className='flex justify-between'>
               <p className="text-[10px] md:text-[10px] lg:text-[16px] montserrat">{card.subtitle}</p>
               <p className="text-[10px] md:text-[10px] lg:text-[15px] montserrat">{card.level}</p>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       </div>
     </div>
    </div>
  );
};

export default Courses;