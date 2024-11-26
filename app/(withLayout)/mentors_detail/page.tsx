import React from 'react';
import mentors_detail from '@/public/images/news_letter/news_letter.png'
import mentors from '@/public/images/home/mentors/mentors1.png'
import { FaCheckCircle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import Image from 'next/image';
const expertise = [
    {id:1,listIcon: <FaCheckCircle />,list:'Sample Text'},
    {id:1,listIcon: <FaCheckCircle />,list:'Sample Text'},
    {id:1,listIcon: <FaCheckCircle />,list:'Sample Text'},
    {id:1,listIcon: <FaCheckCircle />,list:'Sample Text'},
    {id:1,listIcon: <FaCheckCircle />,list:'Sample Text'},
    {id:1,listIcon: <FaCheckCircle />,list:'Sample Text'},
]
const page = () => {
    return (
        <div className="relative mx-auto bg-white">
             <Image
                alt='mentors_detail' 
                src={mentors_detail}
                width={1000} 
                height={200} 
               quality={95}
                className='w-full h-[300px] md:h-[453px] lg:h-[453px] uws:h-[800px]' 
            />
            
           
           <div className='relative xs:-mt-16 sm:-mt-16  md:-mt-24 lg:-mt-24 exl:-mt-24 uws:-mt-60'>
           <div className='w-8/12 mx-auto xs:h-[150px] md:h-[250px] lg:h-[250px] uws:h-[650px]  xs:mt-1 flex justify-between xs:items-center'>
                             <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 lg:w-60 lg:h-60 uws:h-96 uws:w-96 bg-red-500 overflow-visible rounded-full ">
                             
                              <Image
                                src={mentors}
                                alt='mentors'
                                width={200}
                                height={200}
                                className="absolute -top-3 md:-top-4 lg:-top-16  uws:-top-12 lg:w-72 lg:h-80 uws:w-[450px] uws:h-[450px] " 
                              />
                            </div>

                           <div className='text-right flex flex-col xs:justify-start justify-center'>
                           <h3 className="text-black  md:text-[22px] lg:text-[36px] mt-4 lg:mt-8 uws:text-[50px] jaro  ">
                           ABDUR RAHMAN
                            </h3>
                            <p className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none">
                            Chief Instructor <br /> Digital marketing
                            </p>
                           </div>
                          </div>
           </div>
            
           
           
             <div className='flex items-center gap-4 w-8/12 mx-auto mt-8'>
                                <p className='montserat xs:text-[15px] md:text-[32px] uws:text-[60px] lg:text-[20px]'>INSTRUCTOR DETAILS</p>
                                <h1 className='border-[1px] flex-grow border-black'></h1>
                            </div>
             
            
            <div className='xs:w-full sm:w-full md:w-11/12 lg:w-8/12 exl:w-8/12 uws:w-8/12 mx-auto  md:flex lg:flex exl:flex uws:flex justify-between mt-8 lg:gap-4 uws:gap-4'>
            <div className='xs:w-full md:w-4/12 lg:w-6/12 exl:w-6/12 uws:w-6/12 h-[339px] uws:h-[420px] border-[1px] border-[#8F8F8F] rounded-[18px] montserat font-semibold shadow-lg shadow-[#00000040] flex flex-col justify-center px-12'>
                <p className='text-[20px] uws:text-[48px]'>Expertise</p>
                 <div>
                    {
                        expertise?.map((params,idx)=>(<div key={idx} className='flex items-center mt-3'>
                            <p className='w-[24px] h-[24px] text-red-600 flex items-center'>{params.listIcon}</p>
                            <p className='text-[14px] uws:text-[20px]'>{params.list}</p>
                        </div>))
                    }
                 </div>
               
             </div>


             <div className='xs:w-full md:w-7/12 lg:w-10/12 exl:w-5/12 uws:w-10/12 xs:h-auto h-[339px] border-[1px] border-[#8F8F8F] text-white rounded-[18px] bg-[#ED1C24] montserat shadow-lg shadow-[#00000040] flex flex-col justify-center  px-12 xs:py-8 xs:mt-8 md:mt-0 lg:mt-0 exl:mt-0 uws:mt-0'>
           <p className=' font-semibold text-[20px] uws:text-[48px]'>Qualification</p>
           <p className='text-[10px] mt-5 uws:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit euismod pulvinar. Vestibulum ac metus et quam tempus feugiat at nec nunc. Sed pharetra ante mi, nec pulvinar urna fermentum nec. Morbi at nulla fermentum, pretium lorem nec, feugiat justo. Nulla interdum ligula eu nisi aliquam luctus. Aliquam interdum orci ipsum. Etiam eget quam vel lacus ultricies tincidunt. Morbi accumsan facilisis neque sed mollis. Etiam sagittis leo dui, in dignissim orci varius non. Mauris ut mi accumsan, commodo arcu nec, faucibus massa. Morbi ac pellentesque velit. Nullam consequat ullamcorper tincidunt.</p>
           {/* social_media_logo */}
           <div className='flex gap-2  mt-5'>
           <MdFacebook className='text-[39px]' />
           <ImLinkedin  className='text-[33px] rounded-full'/>
           </div>
             </div>
            </div>
            

             
             <div className='xs:w-full md:w-11/12 lg:w-8/12 exl:w-8/12 uws:w-8/12 mx-auto border-[0.25px] border-[#909090] rounded-[15px] shadow-lg shadow-[#00000040] mt-8 mb-8 montserat xs:text-[12px] md:text-[16px] lg:text-[16px] exl:text-[16px] uws:text-[29px] flex flex-col justify-center px-8 py-8 '>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit euismod pulvinar. Vestibulum ac metus et quam tempus feugiat at nec nunc. Sed pharetra ante mi, nec pulvinar urna fermentum nec. Morbi at nulla fermentum, pretium lorem nec, feugiat justo. Nulla interdum ligula eu nisi aliquam luctus. Aliquam interdum orci ipsum. Etiam eget quam vel lacus ultricies tincidunt. Morbi accumsan facilisis neque sed mollis. Etiam sagittis leo dui, in dignissim orci varius non. Mauris ut mi accumsan, commodo arcu nec, faucibus massa. Morbi ac pellentesque velit. Nullam consequat ullamcorper tincidunt.</p> <br/>
             <p>Nulla ligula turpis, vulputate ut neque sit amet, lacinia aliquam urna. Sed vitae urna et est facilisis condimentum. Etiam nec accumsan neque. Phasellus lacinia ante a lorem convallis, eget auctor tellus feugiat. Fusce nulla dui, venenatis at porttitor vitae, iaculis ut nisi. Proin at erat gravida, molestie magna vehicula, vulputate arcu. Etiam vulputate fringilla varius. Proin porttitor mi risus, at lacinia est mattis a. Nulla ac lectus diam. Donec vehicula facilisis enim, a blandit dui gravida eget. Maecenas enim tellus, sollicitudin efficitur suscipit et, tincidunt vitae sem. Aenean efficitur mi eget nulla ullamcorper, in mattis ipsum viverra. Vivamus commodo dolor eget nunc mattis bibendum. Mauris rhoncus nibh tortor, sed commodo ante accumsan ac.</p>

             </div>
         
        </div>
    );
};

export default page;