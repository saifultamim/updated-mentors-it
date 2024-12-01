'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import contact from '@/public/images/contact/contact.png';
import InputField from '@/shared_comp/InputField/InputField';
// import Button from '@/shared_comp/Button/Button';
import { FormData, LoginFormProps } from '@/utils/types';

const LoginForm: React.FC<LoginFormProps> = ({role}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    subject: '',
    courseEnrolled: '',
    query: ''
  });

  const loginFields = [
    { name: "userName", label: "USER NAME", type: "text" },
    { name: "password", label: "PASSWORD", type: "text" },
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
    <div className="mx-auto bg-black pb-24">
      <Image
        alt="contact"
        src={contact}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[300px] md:h-[453px] lg:h-[453px]"
      />
      <div className="absolute text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white">
        <p>{role}</p>
      </div>
      <div className="w-11/12 lg:w-7/12 exl:w-7/12 uws:7/12 relative -mt-32 mx-auto bg-white px-2 py-12 rounded-[18px]">
        <form onSubmit={handleSubmit}>
          {loginFields.map((field, idx) => (
            <div key={idx}>
              <InputField params={field} onChange={handleInputChange}  />
            </div>
          ))}
           <div className='xs:w-11/12 sm:w-11/12 md:w-4/6 lg:w-4/6 exl:w-4/6 uws:w-4/6 mt-4 mb-4 mx-auto '>
        <button
            className=" h-[43px] uws:h-[60px] w-full  bg-[#ED1C24] text-white rounded-[5px] montserat font-bold text-[12px] uws:text-[20px] text-center"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
        </form>
            <div className='montserat mt-20 '>
                <p className='font-normal text-[#000000] text-[12px]  md:text-[16px] lg:text-[16px] uws:text-[20px] text-center leading-1'>For New Registration, Click Here</p>
                <div className=' xs:w-11/12 sm:w-11/12 md:w-4/6 lg:w-4/6 exl:w-4/6 uws:w-4/6  mt-4 mb-4 mx-auto '>
        <button
            className="border border-blue-600   h-[43px] uws:h-[60px] w-full  bg-[#000000] text-white rounded-[5px] montserat font-bold text-[12px] uws:text-[20px] text-center "
            type="submit"
          >
            SIGN UP / REGISTER
          </button>
        </div>
            </div>


      </div>
    </div>
  );
};

export default LoginForm;
