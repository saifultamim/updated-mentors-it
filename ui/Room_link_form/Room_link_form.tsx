'use client'
import { room_link_formProps } from '@/utils/types';
import { useRouter } from 'next/navigation';
import React from 'react';

const Room_link_form: React.FC<room_link_formProps> = ({ title, fields, onSubmit, onEnd,onRecommendation,bool=false }) => {
  const router = useRouter()
  //const [showRecommendations, setShowRecommendations] = useState(bool);
  // Handles End Live with a parameter
  const handleEndLive = (parameter: string) => {
    //setShowRecommendations(true); // Show the recommendations section
    onEnd(parameter); // Pass the parameter to the onEnd callback
   if(!bool){
    router.push('/student_portal/student_live_end')
   }

  };

  const handleGoLive = () => {
    //setShowRecommendations(false); // Hide the recommendations section
    onSubmit(); // Call the onSubmit callback
  };

  // Handles recommendation button clicks
  const handleRecommendationClick = (recommendation: string) => {
    console.log("Recommendation selected:", recommendation);
    if (onRecommendation) {
        // Ensure onRecommendation is defined before invoking it
        onRecommendation(recommendation);
      } else {
        console.log("onRecommendation callback is not defined.");
      }
  };

  return (
   <div className='w-full  '>
    <div className='w-full flex justify-end border border-black'>
    <div className=" w-full lg:w-8/12 exl:w-8/12 uws:w-8/12  border border-black text-[12px] montserat">
      {/* Form Title */}
      <h2 className="text-right font-semibold text-[20px] text-black mb-6">{title}</h2>

      {/* Form Fields */}
      <form className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value || ""}
              onChange={(e) => field.onChange?.(e.target.value)}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-[43px]"
            />
          </div>
        ))}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleGoLive}
            className="w-full py-2 bg-[#C10000] text-white font-bold rounded-md hover:bg-red-700 transition text-right h-[43px] px-8"
          >
            GO LIVE
          </button>
          <button
            type="button"
            onClick={() => handleEndLive("End Live Parameter")} // Pass the parameter here
            className="w-full py-2 bg-[#656565] text-white font-bold rounded-md hover:bg-gray-500 transition text-right h-[43px] px-8"
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
          <div className="flex justify-around items-center space-x-4">
            <button
              className="flex  items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700  justify-center gap-3 w-52 h-12"
              onClick={() => handleRecommendationClick("very_good")}
            >
              <span>😊</span>
              <span>VERY GOOD</span>
            </button>
            <button
              className="flex  items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 justify-center gap-3 w-52 h-12"
              onClick={() => handleRecommendationClick("good")}
            >
              <span>🙂</span>
              <span>GOOD</span>
            </button>
            <button
              className="flex items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 justify-center gap-3 w-52 h-12"
              onClick={() => handleRecommendationClick("basic")}
            >
              <span>😐</span>
              <span>BASIC</span>
            </button>
            <button
              className="flex  items-center bg-[#C10000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 justify-center gap-3 w-52 h-12"
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
