'use client'
import Mentor from '@/ui/Mentor/Mentor';
import Room_link_form from '@/ui/Room_link_form/Room_link_form';
import React, { useState } from 'react';

const Page = () => {
    const [topic, setTopic] = useState("");
    const [meetingId, setMeetingId] = useState("");
    const [pin, setPin] = useState("");
    const room_live_data = [
        
        { id: "topic", type: "text",name:'topic', placeholder: "TOPIC", value: topic, onChange: setTopic },
        { id: "meetingId", type: "text", placeholder: "Meeting ID", value: meetingId, onChange: setMeetingId },
        { id: "pin", type: "text", placeholder: "PIN", value: pin, onChange: setPin },
      
]
const handleGoLive = () => {
    console.log("Go Live with", { topic, meetingId, pin });
  };
  const handleEndLive = () => {
    console.log("End Live");
  };
  const handleRecommendation = (recommendation: string) => {
    console.log("Recommendation received in parent:", recommendation);
    // Handle the recommendation in the parent component (e.g., save to database)
  };
    return (
        <div className='bg-[#000000] pb-60'>
            <Mentor></Mentor>
            <div className='mt-28 w-10/12 mx-auto'>
            <p className='text-white montserat font-semibold text-[20px] text-end '>ROOM LINK</p>
            <Room_link_form
        title="ROOM LINK"
        fields={room_live_data}
        onSubmit={handleGoLive}
        onEnd={handleEndLive}
        onRecommendation={handleRecommendation}
      
      />
            </div>
        </div>
    );
};

export default Page;