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
  {
    id: 12,
    title: (<> DIGITAL12 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 13,
    title: (<> DIGITAL13 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  {
    id: 14,
    title: (<> DIGITAL14 <br/> MARKETING </>),
    subtitle: "Mastery",
    level: "Level 5",
    imageSrc: "/images/home/courses/digital_marketing2.png"
  },
  // Add more cards as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  // Get 3 cards to show at a time
  const displayedCards = [];
  for (let i = 0; i < cardData.length; i++) {
    displayedCards.push(cardData[(currentIndex + i) % cardData.length]);
  }
  
  

  return (
    // first container
    <div className='mt-24'>
      

{/* ======================================================================= */}
      {/* Second section - Carousel */}
     
      <div className='  flex w-8/12 xs:w-10/12  mx-auto'>
         {/* Header Section */}
        <div className='flex flex-row-reverse  justify-between  uws:justify-around  mx-auto w-11/12  lg:-ml-10  '>
        <div className=" text-black text-left mb-4">
    <div  className="text-2xl font-bold w-fit ml-4 lg:ml-8 flex items-center">
    <p className='xs:text-[15px] md:text-[36px] lg:text-[48px] uws:text-[56px]  jaro'>OTHER COURSES</p>
    </div>
  </div>

        {/* Carousel Navigation */}
        <div className="flex items-center mb-6 space-x-4 px-4  md:px-3 lg:px-0  w-3/6  justify-center uws:w-24">
          <button onClick={handlePrev} className="bg-red-600 text-white p-2 rounded-full">
            <FaArrowLeft className="text-black uws:text-[60px]" />
          </button>
          <button onClick={handleNext} className="bg-red-600 text-white p-2 rounded-full">
            <FaArrowRight className="text-black uws:text-[60px]" />
          </button>
        </div>
      </div>
        </div>
      {/* ========================================================================= */}
      {/* cards display */}
     {/* =============================================================================== */}
     <div className=" mt-3   flex flex-col items-center">
      

      {/* Card Display */}
      <div className=" grid xs:grid-cols-2 md:grid-cols-3 grid-cols-3 justify-center space-x-2  md:space-x-4 lg:space-x-4 px-4 md:px-3  lg:px-0 xs:w-5/6 w-4/6 ">
        {/* Show the 3 cards at a time */}
        {displayedCards.map((card) => (
          <div key={card.id} className=" lg:w-[200px] lg:h-[347px] exl:w-[300px] md:h-48 p-1 md:p-4 lg:p-4  rounded-[10px] lg:rounded-[18px] uws:w-[450px] uws:h-[500px] mx-auto mt-8">
            <Image
              alt={`Card ${card.id}`}
              src={card.imageSrc}
              width={262}
              height={202}
              className="w-full h-auto"
            />
            <div className="mt-8 text-black ">
              <p className=" text-8 md:text-lg leading-none md:leading-none lg:text-[32px] uws:text-[40px] jaro">{card.title}</p>
             <div className='flex justify-between'>
             <p className="text-[10px] md:text-[10px] lg:text-[16px] uws:text-[36px] montserrat">{card.subtitle}</p>
             <p className="text-[10px] md:text-[10px] lg:text-[15px] uws:text-[24px] montserrat">{card.level}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     {/* ======================================================================== */}
       
    </div>
  );
};

export default Carousel;

