'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import contact from '@/public/images/contact/contact.png';
import InputField from '@/shared_comp/InputField/InputField';
// import Button from '@/shared_comp/Button/Button';
import { FormData } from '@/utils/types';

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    subject: '',
    courseEnrolled: '',
    query: ''
  });

  const contactFields = [
    { name: "name", label: "NAME", type: "text" },
    { name: "studentId", label: "STUDENT ID", type: "text" },
    { name: "subject", label: "SUBJECT", type: "text"},
    { name: "courseEnrolled", label: "COURSE ENROLLED", type: "text" },
    { name: "query", label: "QUERY", type: "textarea" },
  ];

  const handleInputChange = (name:string, value:string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="mx-auto bg-black">
      <Image
        alt="contact"
        src={contact}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[300px] md:h-[453px] lg:h-[453px]"
      />
      <div className="absolute text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white">
        <p>Contact Us</p>
      </div>
      <div className="w-7/12 relative -mt-32 mx-auto bg-white py-12 rounded-[18px]">
        <form onSubmit={handleSubmit}>
          {contactFields.map((field, idx) => (
            <div key={idx}>
              <InputField params={field} onChange={handleInputChange} />
            </div>
          ))}
           <div className='w-4/6 mt-4 mb-4 mx-auto '>
        <button
            className=" h-[43px] uws:h-[60px] w-full  bg-red-600 text-white rounded-[5px] montserat font-bold text-[12px] uws:text-[20px] text-center"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
