import { InputFieldParams } from '@/utils/types';
import React from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const InputField = ({ params, onChange, widthClass = 'w-4/6' }: InputFieldParams) => {
  console.log('++++++++++ ',params,widthClass)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(params.name, e.target.value); // Pass name and value to parent
  };

  return (
    <div>
      <div className={`${widthClass} mx-auto mt-2`}>
        {/* Label */}
        <label
          htmlFor={`input-${params.name}`}
          className="montserat mb-2 text-[10px] md:text-[12px] lg:text-[12px] exl:text-[16px] uws:text-[25px]"
        >
          {params?.label}
        </label>
        <br />
        {/* Input Field */}
        <div className={`${(params.name === 'expertise' || params.name === 'courseEnrolled') && 'flex items-center'}`}>
          {params.type === 'textarea' ? (
            // Textarea Component
            <textarea
              id={`input-${params.name}`}
              // placeholder={params?.placeholder}
              className={`w-full h-[150px] md:h-[300px] lg:h-[400px] bg-white rounded-[5px] px-4 py-2 text-xs md:text-sm lg:text-base shadow-lg shadow-[#00000040]
                focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 placeholder:text-8`}
              onChange={handleChange}
            />
          ) : (
            // Input Field Component
            <input
              id={`input-${params.name}`}
              type={params.type}
               placeholder={params.placeholder}
              className={`w-full ${
                params.type === 'file' ? 'bg-[#F8F8F8]' : 'bg-white'
              } ${
                params.type === 'textarea'
                  ? 'h-[300px] md:h-[400px] lg:h-[582px]'
                  : widthClass == 'w-full' ? 'h-[41px] md:h-[51px] lg:h-[61px] uws:h-[71px]' : 'h-[40px] md:h-[50px] lg:h-[43px] uws:h-[60px]'
              } rounded-[5px] px-4 text-xs md:text-sm lg:text-base ${
                params.type === 'file' ? 'shadow-none' : 'shadow-lg shadow-[#00000040]'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2`}
              onChange={handleChange}
            />
          )}
          <div className="-ml-12 flex items-center">
            {(params.name === 'expertise' || params.name === 'courseEnrolled') && (
              <IoIosArrowDropdownCircle className="text-2xl absolute" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
