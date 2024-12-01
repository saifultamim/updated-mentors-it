import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/footer/logo.png'
import dashboard from '@/public/images/student_panel/dashboard.png'
import support from '@/public/images/student_panel/support.png'
import live_support from '@/public/images/student_panel/live_support.png'
import student from '@/public/images/student_panel/student.png'

const Student_panel = ({params='Student Portal',children,dashboard_bar=true,dashboard_hidden=true,url_dashboard_color_change='Dashboard'}: { params?: string; children?: React.ReactNode,dashboard_bar?:boolean,dashboard_hidden?:boolean,url_dashboard_color_change?:string }) => {
    const student_panel = [
        {id:1,title:'Dashboard',img:dashboard},
        {id:2,title:'Support',img:support},
        {id:3,title:'Live Support',img:live_support}
    ]
    return (
        <div>


           {/* header */}
           <div className='bg-[#ED1C24] xs:h-[230px] sm:h-[230px] md:h-[260px] lg:h-[391px] exl:h-[391px] uws:h-[490px]'>
           <div className='  w-11/12 mx-auto py-8 flex justify-between items-center'>
            {/* <p>ehllo hwo</p> */}
            <div className=''>
            <Image alt='logo' src={logo} height={63} width={179} className='uws:w-96' />
            </div>
            <p className='jaro xs:text-[16px] sm:text-[17px] md:text-[36px] lg:text-[36px] exl:text-[36px uws:text-[36px]] text-white'>{params}</p>
            </div>
               <div className='w-11/12 mx-auto lg:mt-24 exl:mt-24 uws:mt-24'>
               <p className='montserat font-semibold xs:text-[13px] sm:text-[13px] md:text-[18px] lg:text-[18px] exl:text-[18px] uws:text-[18px]  text-white text-right'>28 November, 2024 <br/> 8.40 PM</p>
               </div>
           </div>
           {/* header */}



            {/* section 1 */}
            <div className=' xs:w-full md:w-11/12 lg:w-11/12  xs:grid md:flex lg:flex xs:justify-center md:justify-end lg:justify-end  mx-auto lg:gap-32  lg:px-4  mb-28 lg:-mt-12'>



               {/* left side */}
     
           
           {dashboard_hidden ? <div>
            {
                dashboard_bar &&   <div className=' w-[180px] lg:w-[180px]  uws:w-[270px] h-[826px] uws:h-[1050px] md:w-72 bg-white rounded-[15px] shadow-xl lg:shadow-[#ED1C24] xs:hidden md:hidden lg:block  '>
                <div className=' flex  justify-center  mt-8 gap-4 mb-28 '>
            <div className='w-[180px] h-[826px]'>
              
               {/*  */}
               <div className=' lg:-ml-2 uws:-ml-12'>
                {
                    student_panel?.map((data)=>(<div key={data.id}>
                        <div className={`jaro text-[24px] md:text-[20px] uws:text-[36px] ${url_dashboard_color_change === data.title?'bg-red-600 text-white' : 'bg-white text-black'} rounded-[23px] text-center flex flex-col justify-center mt-10 w-52 lg:w-52 md:w-40 md:h-40 uws:w-72 h-40 uws:h-72`}>
                <Image alt='logo' src={data.img} height={60} width={60} className='mx-auto  uws:w-32 ' />
                    <p>{data.title}</p>
                </div>
                    </div>))
                }
               </div>
               {/*  */}
        </div>
        </div>
            </div> 
            }
           </div> : ''}
               {/* left side */}




               
               {/* right side */}
               <div className={`${dashboard_bar ? 'mx-auto w-full' : 'xs:mx-auto sm:mx-auto md:mx-0 lg:mx-0 exl:mx-0 uws:mx-0 xs:w-11/12 sm:w-11/12  md:w-9/12 lg:w-9/12 exl:w-9/12 uws:w-9/12'}`}>
              {/* top content */}
              <div className='h-[106px] uws:h-[200px] xs:w-72  sm:w-96 md:w-full lg:w-full flex xs:justify-between sm:justify-between md:justify-between lg:justify-between mx-auto  bg-white px-4  rounded-[10px] xs:-mt-6 sm:-mt-6 -mt-0 xs:mb-8 sm:mb-8 mb-0'>
                    {/* <p className='w-[995px] border border-black text-right'>Hello world</p> */}
                   <div>
                   <p className='montserat font-semibold xs:text-[14px]  sm:text-[14px] md:text-[18px] lg:text-[18px] exl:text-[18px] uws:text-[28px]'>Faysal Rhman</p>
                   <p className='montserat xs:text-[10px]  sm:text-[10px] md:text-[14px] lg:text-[14px] exl:text-[14px] uws:text-[24px]'>Student ID 0012001</p>
                   </div>
                   <div className='-mt-8'>
                   <Image alt='student' src={student} height={102} width={102} className='uws:w-48' />
                   </div>
                </div>
              {/* top content */}

                {/* <div className='border border-black xs:block lg:hidden'> */}
                   {/*   dashboard */}
               <div className='  w-full lg:w-[180px] bg-white   rounded-[15px] shadow-xl lg:shadow-[#ED1C24] xs:block md:block lg:hidden '>
                    <div className='flex  justify-center  items-center  gap-4'>
                <div className='w-full'>
                  
                   {/*  */}
               {
                dashboard_hidden ?     <div className='grid grid-cols-3 gap-2 xs:p-2 sm:p-2 p-0 '>
                {
                    student_panel?.map((data)=>(<div key={data.id}>
                        <div className={`jaro xs:text-[12px]  lg:text-[24px] ${url_dashboard_color_change === data.title ?'bg-red-600 text-white' : 'bg-white text-black'} xs:rounded-[5px] mx-auto lg:rounded-[23px] text-center flex flex-col justify-center xs:mt-0 sm:mt-0 md:mt-0 mt-10 xs:w-20 xs:h-18 md:w-36 md:h-32 lg:w-52 lg:h-40 `}>
                <Image alt='logo' src={data.img} height={60} width={60} className='mx-auto xs:w-9 md:w-16' />
                    <p>{data.title}</p>
                </div>
                    </div>))
                }
               </div> : ''
               }
                   {/*  */}
            </div>
            </div>
                </div>
               {/* left side */}
                {/* </div> */}
                
                  
                  {/* dynamic section */}
                  <div className=''>
                 
                    {children}
                   </div>
                  {/* dynamic section */}

               </div>
               {/*   dashboard*/}




            </div>
            {/* section 1 */}





        </div>
    );
};

export default Student_panel;