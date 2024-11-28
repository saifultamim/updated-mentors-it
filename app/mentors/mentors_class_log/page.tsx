'use client'
import Mentor from '@/ui/Mentor/Mentor';
import React, { useState } from 'react';
import InputField from '@/shared_comp/InputField/InputField';
import image from '@/public/images/student_panel/image.png'
import video from '@/public/images/student_panel/video.png'
import slave from '@/public/images/student_panel/slave.png'
import { student_FormData } from '@/utils/types';
import Image from 'next/image';
import { support_log, support_report } from './mentors_class_log_data';


// const generateTableData = () => {
//     const topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"];
//     const previews = ["Basic", "Good", "Bad", "Very Good"];
//     const data = [];
  
//     for (let i = 0; i < 36; i++) {
//       data.push({
//         id: `0056${17 + i}`,
//         name: `Sample Name ${i + 1}`,
//         topic: topics[i % topics.length],
//         start: `${8 + (i % 4)}:${15 + (i % 2) * 15} PM`,
//         end: `${9 + (i % 4)}:${30 - (i % 2) * 15} PM`,
//         preview: previews[i % previews.length],
//       });
//     }
//     return data;
//   };

const Page = () => {
    const course_time_batch = [
        {
            time: "4.00PM - 6.00PM",
            batch1: "Batch DMT007",
            course: ["Wordpress","Customization","DIGITAL MARKETING","MASTERYN ONLINE"],
            batch2: "Batch DMT008",
        },
        {
            time: "4.00PM - 6.00PM",
            batch1: "Batch DMT007",
            course: ["Wordpress","Customization","DIGITAL MARKETING","MASTERYN ONLINE"],
            batch2: "Batch DMT008",
        },
        {
            time: "4.00PM - 6.00PM",
            batch1: "Batch DMT007",
            course: ["Wordpress","Customization","DIGITAL MARKETING","MASTERYN ONLINE"],
            batch2: "Batch DMT008",
        },
    ]

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

      // const tableData = generateTableData();


    return (
        <div className='bg-[#000000] pb-24'>
            <Mentor></Mentor>
            {/* firsr section start */}
             <div className='text-white mt-24 w-10/12 mx-auto text-center montserat font-bold'>
              <p className='text-[24px]'>MY CLASS LOG</p>
              <p className='text-[18px] bg-[#ED1C24] w-48 h-8 mx-auto mt-2'>28.08.2024</p>
             </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 exl:grid-cols-3 uws:grid-cols-3 w-10/12 mx-auto gap-8 mt-8'>
            {
                course_time_batch.map((params,idx)=>(<div key={idx} className='montserrat bg-white border border-black text-[18px] rounded-[24px] text-center py-4'>
                    <p>{params.time}</p>
                       <p>{params.batch1}</p>
                         <div className='font-bold'>
                            {params.course.map((param,idx)=>(<p key={idx} className={`${param == 'Wordpress' || param == 'Customization' ? "text-[#ED1C24]" : "text-[#333333]" }`}>{param}</p>))}
                         </div>
                        <p className='text-[#333333] font-bold'>{params.batch2}</p>
                     </div>))
            }
          </div>
         

            {/* first section end */}

{/* second section start */}
<div className='w-10/12 mx-auto mt-8 gap-12 xs:grid lg:flex'>
            {/* support section start */}
            <div className='5/10 w-full'>
            <p className='montserat font-semibold text-[20px] text-white'>SUPPORT</p>
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


        <div className='mt-12 '>
          <p className='montserat font-bold text-[14px] text-white text-center lg:text-start '>SUPPORT REPORT</p>
           <table className="sm:min-w-full lg:min-w-full  border-collapse text-[9px] lg:text-[12px] uws:text-[18px] bg-[#D9D9D9] rounded-[12px] xs:mx-auto">
        <thead className="bg-[#ED1C24]">
          <tr>
            <th className="rounded-l-[11px] p-2">DATE</th>
            <th className=" p-2">SIGN IN</th>
            <th className=" p-2">SIGN OUT</th>
            <th className="rounded-r-[11px] p-2">SOLVED QUERIES</th>
          </tr>
        </thead>
        <tbody className='text-center '>
            {
              support_report.map((params,idx)=>(<tr key={idx}>
                <td className=" p-2">{params.date}</td>
                <td className=" p-2">{params.sign_in}</td>
                <td className=" p-2">{params.sign_in}</td>
                <td className=" p-2">{params.solved_queries}</td>
              </tr>))
            }
        </tbody>
      </table>

        </div>
            </div>
            {/* support section end */}

            {/* support log section start */}
            <div className="w-5/10 w-full">
            <p className='montserat font-bold text-[14px] text-white mb-3 text-center lg:text-start'>SUPPORT LOG</p>
      <table className=" sm:min-w-full  lg:min-w-full border-collapse  text-[9px] lg:text-[12px] uws:text-[18px] bg-[#D9D9D9] rounded-[12px]">
       <thead>    
       {/* className="bg-[#ED1C24]" */}
          <tr className="bg-[#ED1C24] rounded-lg">
            <th className=" p-2 rounded-l-[11px]">ID</th>
            <th className=" p-2">Name</th>
            <th className=" p-2">Topic</th>
            <th className=" p-2">Start</th>
            <th className=" p-2">End</th>
            <th className=" p-2 rounded-r-[11px]">Preview</th>
          </tr>
        </thead>
        <tbody className='text-right'>
          {support_log.map((params, idx) => (
            <tr key={idx} className=''>
              <td className=" p-2">{params.id}</td>
              <td className=" p-2">{params.name}</td>
              <td className=" p-2">{params.topic}</td>
              <td className=" p-2">{params.start}</td>
              <td className=" p-2">{params.end}</td>
              <td className=" p-2">{params.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            {/* support log section end */}
</div>
{/* second section end */}
        </div>
    );
};

export default Page;