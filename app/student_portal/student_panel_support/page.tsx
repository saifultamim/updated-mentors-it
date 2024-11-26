'use client'
import InputField from '@/shared_comp/InputField/InputField';
import Student_panel from '@/ui/Student_panel/Student_panel';
import image from '@/public/images/student_panel/image.png'
import video from '@/public/images/student_panel/video.png'
import slave from '@/public/images/student_panel/slave.png'
import { student_FormData } from '@/utils/types';
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
    const [formData, setFormData] = useState<student_FormData>({
        topicCategory: '',
        subject: '',
        supportMessage: '',
      });
    
      const supportFields = [
        { name: "expertise",  type: "text", placeholder: "TOPIC CATEGORY" },
        { name: "subject", type: "text", placeholder: "SUBJECT" },
        //{ name: "supportMessage",  type: "text", placeholder: "SUPPORT MESSAGE" },
      ];
      const supportMessage = [
        {id:1,img:image},
        {id:2,img:video},
        {id:3,img:slave},
      ]
    
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
        <div>
            <Student_panel>
            <form onSubmit={handleSubmit}>
          {supportFields.map((field, idx) => (
            <div key={idx} className='montserrat text-[12px]'>
              <InputField params={field} onChange={handleInputChange} widthClass='w-full' />
            </div>
          ))}
    <div className='flex justify-end'>
    <textarea
  id="fname"
  name="fname"
  placeholder="SUPPORT MESSAGE"
  className={`w-full bg-white h-[300px] md:h-[400px] lg:h-[234px] rounded-[5px] px-4 py-2 text-xs md:text-sm lg:text-base shadow-lg shadow-[#00000040] focus:outline-none focus:ring-2 focus:ring-blue-500 mt-8 placeholder:text-left placeholder:align-top placeholder:text-gray-400`}
></textarea>
<div className=' absolute mt-12  mr-16 '>
  <div className='flex '>
    {
      supportMessage.map((params,idx)=>(<div key={idx}>
        <Image alt='support Message' src={params.img} width={37} height={22} className='' />
      </div>))
    }
  </div>
</div>
    </div>
           <div className='mt-4 mb-4 mx-auto '>
        <button
            className=" h-[43px] uws:h-[60px] w-full  bg-red-600 text-white rounded-[5px] montserat font-bold text-[12px] uws:text-[20px] text-center"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
        </form>
            </Student_panel>
        </div>
    );
};

export default Page;