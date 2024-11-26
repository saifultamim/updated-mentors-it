'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BiColor } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false); // Dropdown state for ABOUT US
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); // Dropdown state for COURSES
  const [color,setChangeColor]=useState('')
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const coursesRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null); // Ref for the entire navbar

  // Toggle for mobile menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Dropdown toggle handlers
  const toggleAboutUsDropdown = () => {
    setIsAboutUsOpen((prev) => !prev);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen((prev) => !prev);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current && 
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Close the mobile menu if click is outside the navbar
    }

    if (
      aboutUsRef.current &&
      !aboutUsRef.current.contains(event.target as Node)
    ) {
      setIsAboutUsOpen(false);
    }

    if (
      coursesRef.current &&
      !coursesRef.current.contains(event.target as Node)
    ) {
      setIsCoursesOpen(false);
    }
  };

  // Close dropdowns and mobile menu when clicking any link inside the dropdown
  const closeDropdowns = () => {
    setIsAboutUsOpen(false);
    setIsCoursesOpen(false);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleColorChange = (name:string) => {
    setChangeColor(name)
    console.log('hello worlds')
  }


  return (
    <nav ref={navbarRef} className=" bg-black lg:bg-[#00000099] exl:bg-[#00000099] uws:bg-[#00000099] text-white fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-4 jaro">
      {/* Logo Section */}
      <div>
        <Link href="/">
          <Image alt="logo" src="/images/logo/logo.png" width={169} height={42} quality={95} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8 lg:space-x-2 uws:space-x-8 items-center text-[16px] uws:text-[28px]">
        {/* ABOUT US Dropdown */}
        <div className="relative flex lg:mr-4" ref={aboutUsRef}>
          <button  className={`flex items-center hover:text-gray-300 `}>
           <Link href='/about_us' className={`${color == 'aboutus'?'text-red-600':'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('aboutus')}}> ABOUT US</Link>
           </button>
            <Image alt="sort_down" src="/images/home/sort_down.png" width={19} height={19} className="ml-2 uws:w-8"  onClick={toggleAboutUsDropdown}/>
          {/* </button> */}
          {isAboutUsOpen && (
            <div className="absolute top-full right-0 mt-2 bg-slate-400 text-black rounded shadow-lg py-2 w-40">
              <Link href="/mentors" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'overview' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('overview')}}>Mentors</Link>
              <Link href="/news_letter" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'ourMission' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('ourMission')}}>News Letter</Link>
              <Link href="/mentors_detail" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'team' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('team')}}>Mentors deatil</Link>
              <Link href="#" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'testimonials' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('testimonials')}}>Testimonials</Link>
            </div>
          )}
        </div>

        {/* COURSES Dropdown */}
        <div className="relative" ref={coursesRef}>
          <button  className="flex items-center hover:text-gray-300">
            <Link href='/courses' className={`${color == 'courses'? 'text-red-600': 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('courses')}} >COURSES</Link>
            <Image alt="sort_down" src="/images/home/sort_down.png" width={20} height={20} className="ml-2 uws:w-8" onClick={toggleCoursesDropdown} />
          </button>
          {isCoursesOpen && (
            <div className="absolute top-full right-0 mt-2 bg-slate-400 text-black rounded shadow-lg py-2 w-40">
             <Link href="/course" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'ccourse' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('ccourse')}}>Course</Link>
              <Link href="#" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'courMission' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('courMission')}}>Our Mission</Link>
              <Link href="#" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'cteam' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('cteam')}}>Team</Link>
              <Link href="#" className={`block px-4 py-2 hover:bg-gray-200 ${color == 'ctestimonials' ?'text-red-600': 'text-white' }`} onClick={()=>{closeDropdowns();handleColorChange('ctestimonials')}}>Testimonials</Link>
            </div>
          )}
        </div>

        <Link href="/success_story" className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${color == 'successStory' ? 'text-red-600' : 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('successStory')}}>SUCCESS STORY</Link>
        <Link href="/contact" className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${color == 'contact' ? 'text-red-600' : 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('contact')}}>CONTACT</Link>
        <Link href="/career" className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${color == 'career' ? 'text-red-600' : 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('career')}}>CAREER</Link>
        <Link href="#" className="bg-[#ED1C24] px-4 py-2 rounded text-white hover:bg-red-600 uws:text-[28px]">Student Log In</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full xs:bg-black sm:bg-black md:bg-black text-white flex flex-col items-start py-4 lg:hidden">
          {/* ABOUT US */}
          <div className="relative flex w-full px-6" ref={aboutUsRef}>
            <button  className="w-full text-left hover:bg-gray-700 px-2 py-2 flex justify-between">
              <Link href='/about_us' className={`${color == 'aboutus' ? 'text-red-600' :'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('aboutus')}}>ABOUT US</Link>
              </button>
              <Image alt="sort_down" src="/images/home/sort_down.png" width={19} height={19} className="mr-2 h-6 " onClick={toggleAboutUsDropdown} />
            {/* </button> */}
            {isAboutUsOpen && (
              <div className="z-20 absolute top-full right-0 bg-slate-400 text-white rounded shadow-lg -mt-10 w-auto">
                <Link href="/mentors" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'overview' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('overview')}}>Mentors</Link>
                <Link href="/news_letter" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'ourMission' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('ourMission')}}>New Letter</Link>
                <Link href="/mentors_detail" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'team' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('team')}}>Mentors Detail
                </Link>
                <Link href="#" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'testimonials' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('testimonials')}}>Testimonials</Link>
              </div>
            )}
          </div>

          {/* COURSES */}
          <div className="relative flex w-full px-6" ref={coursesRef}>
            <button  className="w-full text-left hover:bg-gray-700 px-2 py-2 flex justify-between">
             <Link href='/courses' className={`${color == 'courses' ? 'text-red-600' :'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('courses')}} >COURSES</Link>
              </button>
              <Image alt="sort_down" src="/images/home/sort_down.png" width={19} height={19} className="mr-2 h-6" onClick={toggleCoursesDropdown} />
            {/* </button> */}
            {isCoursesOpen && (
              <div className="absolute top-full right-0 bg-slate-400 text-white rounded shadow-lg -mt-10 w-auto">
              <Link href="/course" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'ccourse' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('ccourse')}}>Course</Link>
                <Link href="#" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'courMission' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('courMission')}}>Our Mission</Link>
                <Link href="#" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'cteam' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('cteam')}}>Team
                </Link>
                <Link href="#" className={`block px-6 py-2 hover:bg-gray-200 ${color == 'ctestimonials' ? 'text-red-600' :'text-white'}`}  onClick={()=>{closeDropdowns();handleColorChange('ctestimonials')}}>Testimonials</Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/success_story" className={`text-lg hover:bg-gray-700 px-6 py-2 ${color == 'successStory' ? 'text-red-600' : 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('successStory')}}>SUCCESS STORY</Link>
          <Link href="/contact" className={`text-lg hover:bg-gray-700 px-6 py-2 ${color == 'contact' ? 'text-red-600' : 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('contact')}}>CONTACT</Link>
          <Link href="/career" className={`text-lg hover:bg-gray-700 px-6 py-2 ${color == 'career' ? 'text-red-600' : 'text-white'}`} onClick={()=>{closeDropdowns();handleColorChange('career')}}>CAREER</Link>
          <Link href="#" className="bg-[#ED1C24] px-6 py-2 rounded text-white hover:bg-red-600" onClick={closeDropdowns}>Student Log In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
