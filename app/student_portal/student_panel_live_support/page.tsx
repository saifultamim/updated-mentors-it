'use client'
import InputField from '@/shared_comp/InputField/InputField';
import Student_panel from '@/ui/Student_panel/Student_panel';
import live_session from '@/public/images/student_panel/live_session.png'
import image from '@/public/images/student_panel/image.png'
import video from '@/public/images/student_panel/video.png'
import slave from '@/public/images/student_panel/slave.png'
import mentor1 from '@/public/images/student_panel/fuad.png'
import mentor2 from '@/public/images/student_panel/nabila.png'
import stu1 from '@/public/images/student_panel/saddam.png'
import cPanel from '@/public/images/student_panel/cPanel.png'
import { student_FormData } from '@/utils/types';
import React, { useState } from 'react';
import Image from 'next/image';
import Timeline from '@/ui/Timeline/Timeline';

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
      const timeline_data = [
        {id:1,img: stu1,stu_name: "Saddam Hussain",stu_level: "Student, Level 2",stu_id: "Student ID: 005478",des1: "I can’t upload more then 2mb file on my wordpress, it say’s exceed limits. how can i do it?",des2:'Thanks in advance.',date: "2024-11-23",time: "09:30AM",},
        {id:2,img: mentor1,mentor_name: "Nabila Rahee",mentor_designation: "Instructor, MentorsIT",des1: "Go to Multiphp INI editor, you’ll find the max upload limit, 2mb, edit that to your desired size, and save it.",des2:'then just refresh wordpress dashboard, and upload it.',date: "2024-11-23",time: "09:30AM",},
        
        {id:3,img: mentor2,mentor_name: "Fuad Hasan",mentor_designation: "Instructor, MentorsIT",des1: "C-panel > Multiphp INI editor > max upload limit > 2mb, edit that to your desired size, and save it.",date: "2024-11-23",time: "09:30AM"},
    ]

    const timeline_data2 = [
      {id:1,img: stu1,stu_name: "Saddam Hussain",stu_level: "Student, Level 2",stu_id: "Student ID: 005478",des1: "I can’t upload more then 2mb file on my wordpress, it say’s exceed limits. how can i do it?",des2:'Thanks in advance.',date: "2024-11-23",time: "09:30AM",cPanelImg:cPanel},
      {id:2,img: mentor1,mentor_name: "Nabila Rahee",mentor_designation: "Instructor, MentorsIT",des1: "Go to Multiphp INI editor, you’ll find the max upload limit, 2mb, edit that to your desired size, and save it.",des2:'then just refresh wordpress dashboard, and upload it.',date: "2024-11-23",time: "09:30AM",},
      
      {id:3,img: mentor2,mentor_name: "Fuad Hasan",mentor_designation: "Instructor, MentorsIT",des1: "C-panel > Multiphp INI editor > max upload limit > 2mb, edit that to your desired size, and save it.",date: "2024-11-23",time: "09:30AM"},
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
           <div className='lg:flex xs:grid gap-8 px-4'>
            <div className='w-5/12 xs:w-full px-4 h-[381px] border-1 border-[#ED1C24] rounded-[21px] shadow-lg shadow-[#ED1C24] flex flex-col justify-center mt-10 '>
                <Image alt='live_session' src={live_session} width={102} height={102} className=' mx-auto' />
                <p className='montserrat text-[32px] font-bold border border-black text-center leading-8 mt-4'>START <br/><span className='font-black'>LIVE SESSION</span></p>
                </div>
            <div className=' w-full'>
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
<div className=' absolute mt-12  mr-16 xs:mr-0'>
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
            </div>
           </div>
           {/* timeline  start*/}
          <div className='mx-auto'>
            <p className='text-[36px] montserrat font-bold text-center'>TIME LINE</p>
            <div className=' grid grid-cols-1 lg:flex justify-between  gap-8 '>
               
                 <div className='flex flex-col items-end'>
                    {
                        timeline_data?.map((params,idx)=>(<div key={idx} 
                          style={{ width: `${(12 - idx) / 12 * 100}%` }}>
                        <div> 
                        <Timeline params={params} ></Timeline>
                        </div>
                        </div>))
                    }
                 </div>
               
                 <div className='flex flex-col items-end'>
                    {
                        timeline_data2?.map((params,idx)=>(<div key={idx} 
                          style={{ width: `${(12 - idx) / 12 * 100}%` }}>
                        <div> 
                        <Timeline params={params} ></Timeline>
                        </div>
                        </div>))
                    }
                 </div>
           </div>
          </div>
           {/* timeline end */}
            </Student_panel>



        </div>
    );
};

export default Page;

// className={`w-${(12-((timeline_data.length-(idx+1))))/12}`}