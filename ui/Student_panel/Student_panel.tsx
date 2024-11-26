import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/footer/logo.png'
import dashboard from '@/public/images/student_panel/dashboard.png'
import support from '@/public/images/student_panel/support.png'
import live_support from '@/public/images/student_panel/live_support.png'
import student from '@/public/images/student_panel/student.png'

const Student_panel = ({params='Student Portal',children,dashboard_bar=true}: { params?: string; children?: React.ReactNode,dashboard_bar?:boolean }) => {
    const student_panel = [
        {id:1,title:'Dashboard',img:dashboard},
        {id:2,title:'Support',img:support},
        {id:3,title:'Live Support',img:live_support}
    ]
    return (
        <div>


           {/* header */}
           <div className='bg-[#ED1C24] h-[391px]'>
           <div className='  w-11/12 mx-auto py-8 flex justify-between'>
            {/* <p>ehllo hwo</p> */}
            <div className=''>
            <Image alt='logo' src={logo} height={63} width={179} className='uws:w-96' />
            </div>
            <p className='jaro text-[36px] text-white'>{params}</p>
            </div>
               <div className='w-11/12 mx-auto mt-24'>
               <p className='montserat font-semibold text-[18px] text-white text-right'>28 November, 2024 <br/> 8.40 PM</p>
               </div>
           </div>
           {/* header */}



            {/* section 1 */}
            <div className=' xs:w-full md:w-11/12 lg:w-11/12  xs:grid md:flex lg:flex xs:justify-center md:justify-between lg:justify-end  mx-auto lg:gap-32  lg:px-4  mb-28 lg:-mt-12'>



               {/* left side */}
     
            {
                dashboard_bar &&   <div className=' w-[180px] lg:w-[180px]  uws:w-[500px] h-[826px] md:w-72 bg-white rounded-[15px] shadow-xl lg:shadow-[#ED1C24] xs:hidden md:block lg:block  '>
                <div className=' flex  justify-center mt-8 gap-4 mb-28 '>
            <div className='w-[180px] h-[826px]'>
              
               {/*  */}
               <div className=' lg:-ml-2 uws:-ml-12'>
                {
                    student_panel?.map((data)=>(<div key={data.id}>
                        <div className='jaro text-[24px] md:text-[20px] uws:text-[36px] bg-red-600 rounded-[23px] text-center flex flex-col justify-center mt-10 w-52 lg:w-52 md:w-40 md:h-40 uws:w-72 h-40 uws:h-72'>
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
           
               {/* left side */}




               
               {/* right side */}
               <div className={`${dashboard_bar ? 'mx-auto w-full' : 'w-9/12'}`}>
              {/* top content */}
              <div className='h-[106px] uws:h-[200px] xs:w-72 sm:w-96 md:w-full lg:w-full flex md:justify-between lg:justify-between mx-auto  bg-white px-4  rounded-[10px] '>
                    {/* <p className='w-[995px] border border-black text-right'>Hello world</p> */}
                   <div>
                   <p className='montserat font-semibold text-[18px] uws:text-[28px]'>Faysal Rhman</p>
                   <p className='montserat text-[14px] uws:text-[24px]'>Student ID 0012001</p>
                   </div>
                   <div className='-mt-8'>
                   <Image alt='student' src={student} height={102} width={102} className='uws:w-48' />
                   </div>
                </div>
              {/* top content */}

                {/* <div className='border border-black xs:block lg:hidden'> */}
                   {/*   dashboard */}
               <div className='  w-full lg:w-[180px] bg-white rounded-[15px] shadow-xl lg:shadow-[#ED1C24] xs:block md:hidden lg:hidden'>
                    <div className='flex  justify-center  gap-4'>
                <div className='w-full'>
                  
                   {/*  */}
                   <div className='grid grid-cols-3'>
                    {
                        student_panel?.map((data)=>(<div key={data.id}>
                            <div className='jaro xs:text-[14px]  lg:text-[24px] bg-red-600 xs:rounded-[5px] mx-auto lg:rounded-[23px] text-center flex flex-col justify-center mt-10 xs:w-20 xs:h-20 lg:w-52 lg:h-40'>
                    <Image alt='logo' src={data.img} height={60} width={60} className='mx-auto xs:w-10' />
                        <p>{data.title}</p>
                    </div>
                        </div>))
                    }
                   </div>
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
