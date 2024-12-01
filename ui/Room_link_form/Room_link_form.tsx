'use client'
import { room_link_formProps } from '@/utils/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Room_link_form: React.FC<room_link_formProps> = ({ title, fields, onSubmit, onEnd, onRecommendation, bool = false }) => {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);

  const dropdownOptions = ['SEO', 'Web', 'App', 'Odoo'];

  const handleEndLive = (parameter: string) => {
    onEnd(parameter);
    if (!bool) {
      router.push('/student_portal/student_live_end');
    }
  };

  const handleGoLive = () => {
    onSubmit();
  };

  const handleRecommendationClick = (recommendation: string) => {
    if (onRecommendation) {
      onRecommendation(recommendation);
    } else {
      console.error('onRecommendation callback is not defined.');
    }
  };

  return (
    <div className='w-full mt-8'>
      <div className='w-full  flex justify-end '>
        <div className="w-full  lg:w-8/12 exl:w-8/12 uws:w-8/12  text-[12px] uws:text-[20px] montserat">
          {/* Form Title */}
          <h2 className="text-right font-semibold text-[20px] text-black mb-6">{title}</h2>

          {/* Form Fields */}
          <form className="space-y-4 ">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col">
                {field.name === 'topic' ? (
                  <div className='relative'>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value || ''}
                      onChange={(e) => field.onChange?.(e.target.value)}
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-[43px] uws:h-[63px]"
                      onFocus={() => setDropDown(true)}
                    />
                    <IoIosArrowDropdownCircle
                      className="absolute top-2 right-3 text-2xl text-gray-700 cursor-pointer hover:text-blue-500"
                      onClick={() => setDropDown(!dropDown)}
                    />
                    {dropDown && (
                      <div className="absolute border border-gray-300 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                        {dropdownOptions.map((option, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              field.onChange?.(option); // Update the field value
                              setDropDown(false); // Close the dropdown
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value || ''}
                    onChange={(e) => field.onChange?.(e.target.value)}
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-[43px] uws:h-[63px]"
                  />
                )}
              </div>
            ))}

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleGoLive}
                className="w-full py-2 bg-[#C10000] text-white font-bold rounded-md hover:bg-red-700 transition text-right h-[43px] uws:h-[63px] px-8"
              >
                GO LIVE
              </button>
              <button
                type="button"
                onClick={() => handleEndLive('End Live Parameter')}
                className="w-full py-2 bg-[#656565] text-white font-bold rounded-md hover:bg-gray-500 transition text-right h-[43px] uws:h-[63px] px-8"
              >
                END LIVE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Recommendation Section */}
      {bool && (
        <div className="mt-8 text-center">
          <h2 className="text-right montserat font-bold text-[16px] text-black mb-6">RECOMMENDATION</h2>
          <div className="text-[10px] md:text-[10px] lg:text-[14px] exl:text-[16px] uws:text-[16px]  grid grid-cols-2  md:flex lg:flex exl:flex uws:flex justify-between items-center gap-4 ">
            <button
              className="flex  items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700   justify-center gap-3 w-32   md:w-52 lg:w-52 exl:w-52 uws:w-52 h-12 sm:ml-auto  "
              onClick={() => handleRecommendationClick("very_good")}
            >
              <span>😊</span>
              <span>VERY GOOD</span>
            </button>
            <button
              className="flex  items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 justify-center gap-3 w-32 md:w-52 lg:w-52 exl:w-52 uws:w-52 h-12 sm:ml-auto"
              onClick={() => handleRecommendationClick("good")}
            >
              <span>🙂</span>
              <span>GOOD</span>
            </button>
            <button
              className="flex items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 justify-center gap-3 w-32 md:w-52 lg:w-52 exl:w-52 uws:w-52 h-12 sm:ml-auto"
              onClick={() => handleRecommendationClick("basic")}
            >
              <span>😐</span>
              <span>BASIC</span>
            </button>
            <button
              className="flex  items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 justify-center gap-3 w-32 md:w-52 lg:w-52 exl:w-52 uws:w-52 h-12 sm:ml-auto"
              onClick={() => handleRecommendationClick("bad")}
            >
              <span>☹️</span>
              <span>BAD</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room_link_form;
