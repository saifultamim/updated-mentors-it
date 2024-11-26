'use client'
'use client'
import Image from "next/image";
import { useState } from "react";
const instructors = [
  {
    name: "ABDUR RAHMAN",
    role: "Chief Instructor",
    field: "Digital Marketing",
    image: "/images/home/mentors/one.png", // Update with actual image path
  },
  {
    name: "SAMSUN NAHAR",
    role: "Instructor",
    field: "Digital Marketing",
    image: "/images/home/mentors/two.png",
  },
  {
    name: "SILVIA SELIM",
    role: "Instructor",
    field: "Digital Marketing",
    image: "/images/home/mentors/three.png",
  },
  {
    name: "ABDUR RAHMAN",
    role: "Chief Instructor",
    field: "Digital Marketing",
    image: "/images/home/mentors/one.png", // Update with actual image path
  },
  {
    name: "SAMSUN NAHAR",
    role: "Instructor",
    field: "Digital Marketing",
    image: "/images/home/mentors/two.png",
  },
  {
    name: "SILVIA SELIM",
    role: "Instructor",
    field: "Digital Marketing",
    image: "/images/home/mentors/three.png",
  },
  {
    name: "RIZWAN ALI",
    role: "Instructor",
    field: "SEO Specialist",
    image: "/images/home/mentors/one.png",
  },
  {
    name: "TANVIR AHMED",
    role: "Instructor",
    field: "Social Media Marketing",
    image: "/images/home/mentors/two.png",
  },
  {
    name: "MAHIA JAHAN",
    role: "Guest Lecturer",
    field: "Content Strategy",
    image: "/images/home/mentors/three.png",
  }
];

const Mentors = ({bool = true,scholarship = true}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= instructors.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? instructors.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    // Show three images at a time
    return [
      instructors[currentIndex],
      instructors[(currentIndex + 1) % instructors.length],
      instructors[(currentIndex + 2) % instructors.length],
    ];
  };

  return (
    <div className='relative h-[540px] uws:h-[650px] '>
      <div className={` h-[20px] md:h-[25px] lg:h-[25px] uws:h-[35px] w-full bg-red-500 ${bool ? 'block' : 'hidden'}`}>
      <div className='absolute -mt-2 md:-mt-11 lg:-mt-10 flex justify-between lg:gap-60 items-center w-full  lg:px-3 uws:px-12'>
      <Image alt='gift' src='/images/home/mentors/gift.png' width={285} height={152} className=" w-24 md:w-[285px] lg:w-[285px]" />
      <p className='-mt-4 md:-mt-9 lg:-mt-12 jaro text-[10px] xs:text-[8px] md:text-[16px] lg:text-[16px] exl:text-[24px] uws:text-[28px]  xs:mr-1 md:mr-2 '>APPLY FOR SCHOLARSHIP TO AVAIL UP TO 50% DISCOUNT ON ANY COURSE</p>
      </div>
      </div>
      <div className="  grid grid-cols-1 md:flex lg:flex items-center exl:justify-around uws:justify-around md:justify-between lg:justify-between p-4 md:p-10 lg:p-2   h-[540px] -z-20  ">
      {/* Left Side */}
      <div className="flex flex-col items-start md:-mt-20 lg:mt-28 ">
        <h2 className="md:text-[15px] font-bold text-gray-800 mb-1 lg:mb-3 lg:text-[16px] uws:text-[30px] leading-none">Industry Expert Leaders <br/>are here in Mentors IT as your</h2>
        <p className='jaro  text-[36px] lg:text-[38px] uws:text-[60px]'>MENTOR</p>
        <div className="flex space-x-2 mb-6  mt-2">
          <button
            onClick={handlePrev}
            className=" bg-black  w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 ">
          <Image alt='ad' src='/images/home/mentors/leftArrow.png' height={60} width={60} className='' />
           
          </button>
          <button
            onClick={handleNext}
            className=" bg-black w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16">
            {/* <MdArrowForwardIos className='' /> */}
            <Image alt='ad' src='/images/home/mentors/rightArrow.png' height={60} width={60} className=''/>
          </button>
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div className="flex space-x-2 md:space-x-6 lg:space-x-3 items-center -mt-28  md:-mt-14 lg:mt-24 ">
        {getVisibleImages().map((instructor, index) => (
          <div
            key={instructor.name}
            className={`flex flex-col items-center ${
              index === 0 ? "scale-110" : "scale-90"
            } transition-transform duration-300 ease-in-out`}
          >
             <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 lg:w-60 lg:h-60 uws:h-96 uws:w-96 bg-red-500 flex items-center justify-center overflow-visible rounded-full">
              {/* Image positioned absolutely */}
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={200}
                height={200}
                className="absolute -top-3 md:-top-4 lg:-top-16  uws:-top-12 lg:w-72 lg:h-80 uws:w-[450px] uws:h-[450px] object-cover" // Adjust -top-4 as needed for positioning
              />
            </div>
            <h3 className="text-white  md:text-[22px] lg:text-[24px] mt-4 lg:mt-8 uws:text-[50px] jaro text-center xs:leading-[14px] xs:mb-2 exl:mb-8">
              {instructor.name}
            </h3>
            <p className="text-white text-center text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none ">
              {instructor.role} <br /> {instructor.field}
            </p>
          </div>
        ))}
      </div>
      {/* <div className='h-10 w-10 bg-black'>

      </div> */}
    </div>

      {/* ==================================================== */}
      <div className='h-[271px] uws:h-[450px]  w-full bg-black absolute -mt-52 md:-mt-[320px] lg:-mt-[200px] exl:-mt-[220px] uws:-mt-[195px] -z-10 flex items-end '>
        {/* gift section */}
       {
        scholarship ?  <div className={`h-[20px] md:h-[25px] lg:h-[25px] w-full bg-red-500 ${bool ? 'hidden' : 'block'}`}>
        <div className='absolute -mt-2 md:-mt-11 lg:-mt-10 flex justify-around lg:gap-60 items-center w-full'>
        <Image alt='gift' src='/images/home/mentors/gift.png' width={285} height={152} className=" w-24 md:w-[285px] lg:w-[285px]" />
        <p className='-mt-4 md:-mt-9 lg:-mt-12 jaro text-[8px] sm:text-[10px] md:text-[16px] lg:text-[18px] uws:text-[30px] '>APPLY FOR SCHOLARSHIP TO AVAIL UP TO 50% DISCOUNT ON ANY COURSE</p>
        </div>
        </div> : ''
       }
      </div>




    
    </div>
  );
};

export default Mentors;
