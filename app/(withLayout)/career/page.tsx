'use client'
import React, { useState } from 'react';
import Button from "@/shared_comp/Button/Button";
import career from '@/public/images/career/career.png'
import InputField from "@/shared_comp/InputField/InputField";
import Image from "next/image";
import Link from 'next/link';
import { FormData } from '@/utils/types';

 // Mark this page as a Client Component



const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    subject: '',
    courseEnrolled: '',
    query: ''
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
  const handleInputChange = (name:string, value:string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const careerFields = [
    { name: "name", label: "NAME", type: "text" },
    { name: "emailId", label: "EMAIL ID", type: "email"},
    { name: "address", label: "ADDRESS", type: "text"},
    { name: "expertise", label: "EXPERTISE", type: "text" },
    { name: "educationQualification", label: "EDUCATION QUALIFICATION", type: "text" },
    { name: "cv", label: "UPLOAD YOUR CV", type: "file" },
  ];

 
  return (
    <div className="relative mx-auto bg-black">
        <Image
                alt='success_story' 
                src={career}
                width={1000} 
                height={200} 
               quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[600px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white'>
               <p className=''>Career</p>
                </div>
                {/*input section */}
      <div className="   xs:w-full sm:w-full      md:w-7/12   lg:w-7/12 exl:w-7/12 uws:w-7/12 relative -mt-16  bg-[#F8F8F8] py-12 mx-auto rounded-[18px]">
      <form onSubmit={handleSubmit}>
          {careerFields.map((field, idx) => (
            <div key={idx}>
              <InputField params={field} onChange={handleInputChange} />
            </div>
          ))}
        <div className='w-4/6 mt-4 mb-4 mx-auto '>
        <button
            className=" h-[43px] uws:h-[60px] w-full  bg-black text-white rounded-[5px] montserat font-bold text-[12px] uws:text-[20px] text-center"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
        </form>
           <Link href='#'>
           <Button params={{color:'#ED1C24',type:'LOGIN/SIGN UP'}}></Button>
           </Link>

      </div>
    </div>
  );
};

export default Page;
