'use client'
import Clock from '@/ui/Clock/Clock';
import Progress_bar from '@/ui/Progress_bar/Progress_bar';
import Student_panel from '@/ui/Student_panel/Student_panel';
import Link from 'next/link';

const Page = () => {
  const downloads = [

    {id:1,topic:'Wordpress Basics',downloadLinks:'EBook Download'},
    {id:2,topic:'Elementor Tips & Tricks',downloadLinks:'EBook Download'},
    {id:3,topic:'CSS Handbook',downloadLinks:'EBook Download'},
    {id:4,topic:'SEO Handbook',downloadLinks:'EBook Download'},
  ]
    
    return (
        <div>
             <Student_panel>
        <div className='border border-black'>
          <p className='montserrat font-bold text-[24px]'>Class Schedule Today</p>
          {/* first section */}
          <div className=' flex gap-4 border border-red-600 mt-8'>
          <div className='w-4/12 montserrat border border-black text-[18px] rounded-[24px] text-center py-4'>
         <p> 4.00PM - 6.00PM</p>
            <p>Batch DMT007</p>
              <p className='text-[#ED1C24] font-bold'>Wordpress <br/> Customization</p>
              <p>DIGITAL MARKETING <br/>MASTERYN ONLINE</p>
             <p className='text-[#333333] font-bold'>Batch DMT008</p>
          </div>
          <div className='w-4/12 montserrat border border-black text-[18px] rounded-[24px] text-center py-4'>
         <p> 4.00PM - 6.00PM</p>
            <p>Batch DMT007</p>
              <p className='text-[#ED1C24] font-bold'>Wordpress <br/> Customization</p>
              <p>DIGITAL MARKETING <br/>MASTERYN ONLINE</p>
             <p className='text-[#333333] font-bold'>Batch DMT008</p>
          </div>
          <div className='w-4/12 montserrat border border-black text-[18px] rounded-[24px] text-center py-4'>
         <p> 4.00PM - 6.00PM</p>
            <p>Batch DMT007</p>
              <p className='text-[#ED1C24] font-bold'>Wordpress <br/> Customization</p>
              <p>DIGITAL MARKETING <br/>MASTERYN ONLINE</p>
             <p className='text-[#333333] font-bold'>Batch DMT008</p>
          </div>
          </div>
          {/* first section */}

          {/* second section */}
          <div className='flex justify-between '>
          <div className='w-6/12 bg-slate-400 jaro text-[15px]'>
          <Progress_bar progress={64} />
          <Progress_bar progress={90} />
          </div>
         
            <button className='bg-[#ED1C24] w-4/12 montserrat font-extrabold  text-[15px] rounded-[8px] '>VIEW COURSE SCORE</button>
        
          </div>
          {/* second section */}
          {/* third section */}
                <div className='flex justify-between'>

                <div className=''>
                    <Clock time="10:00 PM" day="TODAY" />
                     </div>
                     <div className='bg-slate-400 w-8/12'>
                      <p className=' border border-black'>Hello world 1010</p>
                      <div className='flex justify-between montserat text-[20px] font-extrabold'>
                        <p>TOPIC</p>
                        <p>DOWNLOAD LINKS</p>
                      </div>
                      <div>
                            {
                              downloads?.map((params,idx)=>(<div key={idx} className='flex justify-between montserat text-[20px] '>
                                <p>{params.topic}</p>
                                <Link href='#' className='hover:underline text-red-600'>{params.downloadLinks}</Link>
                              </div>))
                            }
                      </div>
                     </div>
        
                </div>

          {/* third section */}
        </div>
             </Student_panel>
        </div>
    );
};

export default Page;