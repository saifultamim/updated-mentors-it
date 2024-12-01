'use client'
import Room_link_form from '@/ui/Room_link_form/Room_link_form';
import Student_panel from '@/ui/Student_panel/Student_panel';
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
        <div className='overflow-y-auto bg-black '>
              <Student_panel dashboard_bar={false} dashboard_hidden={false}>
              <Room_link_form
        title="ROOM LINK"
        fields={room_live_data}
        onSubmit={handleGoLive}
        onEnd={handleEndLive}
        onRecommendation={handleRecommendation}
        bool={true}
      />
                </Student_panel>
        </div>
    );
};

export default Page;