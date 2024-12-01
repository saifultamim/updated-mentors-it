// 'use client'
// import { InputFieldParams } from '@/utils/types';
// import React, { useState } from 'react';
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// const InputField = ({ params, onChange, widthClass = 'w-4/6' }: InputFieldParams) => {
//   //console.log('++++++++++ ',params,widthClass)
//   const [dropDown,setDropDown]=useState(true)
//   const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     onChange(params.name, e.target.value); // Pass name and value to parent
//   };

//   return (
//     <div>
//       <div className={`${widthClass} mx-auto mt-2`}>
//         {/* Label */}
//         <label
//           htmlFor={`input-${params.name}`}
//           className="montserat mb-2 text-[10px] md:text-[12px] lg:text-[12px] exl:text-[16px] uws:text-[25px]"
//         >
//           {params?.label}
//         </label>
//         <br />
//         {/* Input Field */}
//         <div className={`${(params.name === 'expertise' || params.name === 'courseEnrolled') && 'flex items-center'}`}>
//           {params.type === 'textarea' ? (
//             // Textarea Component
//             <textarea
//               id={`input-${params.name}`}
//               // placeholder={params?.placeholder}
//               className={`w-full h-[150px] md:h-[300px] lg:h-[400px] bg-white rounded-[5px] px-4 py-2 text-xs md:text-sm lg:text-base shadow-lg shadow-[#00000040]
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 placeholder:text-8`}
//               onChange={handleChange}
//             />
//           ) : (
//             // Input Field Component
//             <input
//               id={`input-${params.name}`}
//               type={params.type}
//                placeholder={params.placeholder}
//               className={`w-full ${
//                 params.type === 'file' ? 'bg-[#F8F8F8]' : 'bg-white'
//               } ${
//                 params.type === 'textarea'
//                   ? 'h-[300px] md:h-[400px] lg:h-[582px]'
//                   : widthClass == 'w-full' ? 'h-[41px] md:h-[51px] lg:h-[61px] uws:h-[71px]' : 'h-[40px] md:h-[50px] lg:h-[43px] uws:h-[60px]'
//               } rounded-[5px] px-4 text-xs md:text-sm lg:text-base ${
//                 params.type === 'file' ? 'shadow-none' : 'shadow-lg shadow-[#00000040]'
//               } focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2`}
//               onChange={handleChange}
              
//             />
//           )}
//           {/* <div className="-ml-12 flex items-center " onClick={()=>setDropDown(!dropDown)}>
//             {(params.name === 'expertise' || params.name === 'courseEnrolled') && (
//              <div className='flex-col'>
//                <IoIosArrowDropdownCircle className="text-2xl absolute"/>
//             {
//               dropDown &&    <div >
//               <select name="cars" id="cars">
//                 <option value="volvo">Volvo</option>
//                 <option value="saab">Saab</option>
//                 <option value="opel">Opel</option>
//                 <option value="audi">Audi</option>
//               </select>
//             </div>
//             }
//              </div>
              
//             )}
//           </div> */}
//           {/* ==================================================================================== */}
//           <div
//             className="-ml-12 flex items-center cursor-pointer"
//             onClick={() => setDropDown(!dropDown)}
//           >
//             {(params.name === 'expertise' || params.name === 'courseEnrolled') && (
//               <div className="relative">
//                 <IoIosArrowDropdownCircle className="text-2xl text-gray-700 hover:text-blue-500" />
//                 {dropDown && (
//                   <div
//                     className="absolute border -left-28 border-black mt-2 w-48 bg-white shadow-lg rounded-lg z-10 "
//                   >
//                     <select className="py-2">
//                       <option className="px-4 py-2 hover:bg-gray-100 cursor-pointer">SEO</option>
//                       <option className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web</option>
//                       <option className="px-4 py-2 hover:bg-gray-100 cursor-pointer">App</option>
//                       <option className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Odoo</option>
//                     </select>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//           {/* ==================================================================================== */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputField;





// 'use client';

// import React, { useState } from 'react';
// import { IoIosArrowDropdownCircle } from 'react-icons/io';

// interface InputFieldParams {
//   params: {
//     name: string;
//     type: string;
//     placeholder?: string;
//     label?: string;
//   };
//   onChange: (name: string, value: string) => void;
//   widthClass?: string;
// }

// const InputField: React.FC<InputFieldParams> = ({ params, onChange, widthClass = 'w-4/6' }: InputFieldParams) => {
//   const [dropDown, setDropDown] = useState(false);
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const value = e.target.value;
//     setInputValue(value);
//     onChange(params.name, value); // Pass name and value to parent
//   };

//   const dropdownOptions = ['SEO', 'Web', 'App', 'Odoo'];

//   return (
//     <div className={` md:${widthClass} lg:${widthClass} exl:${widthClass} uws:${widthClass} mx-auto mt-2`}>
//       {/* Label */}
//       {params?.label && (
//         <label
//           htmlFor={`input-${params.name}`}
//           className="montserat mb-2 text-[10px] md:text-[12px] lg:text-[12px] exl:text-[16px] uws:text-[25px]"
//         >
//           {params.label}
//         </label>
//       )}
//       <br />
//       <div className={`${(params.name === 'expertise' || params.name === 'courseEnrolled') ? 'flex items-center' : ''}`}>
//         {(params.name === 'expertise' || params.name === 'courseEnrolled') ? (
//           // Dropdown with Input
//           <div className="relative w-full">
//             <input
//               id={`input-${params.name}`}
//               type="text"
//               placeholder={params.placeholder}
//               className={` h-[41px] md:[51px] lg:h-[61px] uws:h-[71px] w-full bg-white rounded-[5px] px-4 text-xs md:text-sm lg:text-base shadow-lg shadow-[#00000040]
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2`}
//               value={inputValue}
//               onFocus={() => setDropDown(true)}
//               onChange={handleChange}
//             />
//             <IoIosArrowDropdownCircle
//               className="absolute top-3 right-3 text-2xl text-gray-700 cursor-pointer hover:text-blue-500"
//               onClick={() => setDropDown(!dropDown)}
//             />
//             {dropDown && (
//               <div className="absolute border border-gray-300 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
//                 {dropdownOptions.map((option, index) => (
//                   <div
//                     key={index}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => {
//                       setInputValue(option);
//                       setDropDown(false);
//                       onChange(params.name, option);
//                     }}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : (
//           // Regular Input Field
//           <input
//             id={`input-${params.name}`}
//             type={params.type}
//             placeholder={params.placeholder}
//             className={`w-full ${
//               params.type === 'file' ? 'bg-[#F8F8F8]' : 'bg-white'
//             } ${
//               params.type === 'textarea'
//                 ? 'h-[300px] md:h-[400px] lg:h-[582px]  '
//                 : 'h-[40px] md:h-[50px] lg:h-[43px] uws:h-[60px]'
//             } rounded-[5px] px-4 text-xs md:text-sm lg:text-base ${
//               params.type === 'file' ? 'shadow-none' : 'shadow-lg shadow-[#00000040]'
//             } focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2`}
//             onChange={handleChange}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default InputField;


'use client';

import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface InputFieldParams {
  params: {
    name: string;
    type: string;
    placeholder?: string;
    label?: string;
  };
  onChange: (name: string, value: string) => void;
  widthClass?: string;
}

const InputField: React.FC<InputFieldParams> = ({ params, onChange, widthClass = 'w-4/6' }: InputFieldParams) => {
  const [dropDown, setDropDown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(params.name, value); // Pass name and value to parent
  };

  const dropdownOptions = ['SEO', 'Web', 'App', 'Odoo'];

  return (
    <div className={`md:${widthClass} lg:${widthClass} exl:${widthClass} uws:${widthClass} mx-auto mt-2`}>
      {/* Label */}
      {params?.label && (
        <label
          htmlFor={`input-${params.name}`}
          className="montserat mb-2 text-[10px] md:text-[12px] lg:text-[12px] exl:text-[16px] uws:text-[25px]"
        >
          {params.label}
        </label>
      )}
      <br />
      <div className={`${params.name === 'expertise' || params.name === 'courseEnrolled' ? 'flex items-center' : ''}`}>
        {params.type === 'textarea' ? (
          // Textarea Component
          <textarea
            id={`input-${params.name}`}
            placeholder={params.placeholder}
            className={`w-full h-[300px] md:h-[400px] lg:h-[582px] bg-white rounded-[5px] px-4 py-2 text-xs md:text-sm lg:text-base shadow-lg shadow-[#00000040]
              focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 placeholder:text-8 align-top text-left`}
            style={{ verticalAlign: 'top' }}
            value={inputValue}
            onChange={handleChange}
          />
        ) : params.name === 'expertise' || params.name === 'courseEnrolled' ? (
          // Dropdown with Input
          <div className="relative w-full">
            <input
              id={`input-${params.name}`}
              type="text"
              placeholder={params.placeholder}
              className={`h-[41px] md:[51px] lg:h-[61px] uws:h-[71px] w-full bg-white rounded-[5px] px-4 text-xs md:text-sm lg:text-base shadow-lg shadow-[#00000040]
                focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2`}
              value={inputValue}
              onFocus={() => setDropDown(true)}
              onChange={handleChange}
            />
            <IoIosArrowDropdownCircle
              className="absolute top-3 right-3 text-2xl text-gray-700 cursor-pointer hover:text-blue-500"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute border border-gray-300 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                {dropdownOptions.map((option, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setInputValue(option);
                      setDropDown(false);
                      onChange(params.name, option);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Regular Input Field
          <input
            id={`input-${params.name}`}
            type={params.type}
            placeholder={params.placeholder}
            className={`w-full ${
              params.type === 'file' ? 'bg-[#F8F8F8]' : 'bg-white'
            } h-[40px] md:h-[50px] lg:h-[43px] uws:h-[60px] rounded-[5px] px-4 text-xs md:text-sm lg:text-base ${
              params.type === 'file' ? 'shadow-none' : 'shadow-lg shadow-[#00000040]'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2`}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
