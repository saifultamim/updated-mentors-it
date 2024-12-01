'use client';
import Clock from '@/ui/Clock/Clock';
import Progress_bar from '@/ui/Progress_bar/Progress_bar';
import Student_panel from '@/ui/Student_panel/Student_panel';
import Link from 'next/link';

const Page = () => {
  const downloads = [
    { id: 1, topic: 'Wordpress Basics', downloadLinks: 'EBook Download' },
    { id: 2, topic: 'Elementor Tips & Tricks', downloadLinks: 'EBook Download' },
    { id: 3, topic: 'CSS Handbook', downloadLinks: 'EBook Download' },
    { id: 4, topic: 'SEO Handbook', downloadLinks: 'EBook Download' },
  ];

  return (
    <div className="w-full overflow-y-auto bg-black ">
      <Student_panel >
        <div className="mt-8">
          {/* Header */}
          <p className="montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-center md:text-left text-white">
            Class Schedule Today
          </p>

          {/* First Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="w-full border border-gray-300 text-center py-6 rounded-lg montserrat text-sm sm:text-base lg:text-lg bg-white shadow-lg px-2"
              >
                <p className="font-medium">4.00PM - 6.00PM</p>
                <p className="text-gray-700">Batch DMT007</p>
                <p className="text-[#ED1C24] font-bold">Wordpress <br/>Customization</p>
                <p className="text-gray-600">DIGITAL MARKETING <br/> MASTERY ONLINE</p>
                <p className="text-gray-800 font-bold">Batch DMT008</p>
              </div>
            ))}
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
            <div className="w-full md:w-6/12  p-4 rounded-lg shadow-lg">
              <Progress_bar progress={64} />
              <Progress_bar progress={90} />
            </div>
            <button className="w-full md:w-4/12 bg-[#ED1C24] text-white font-bold py-3 rounded-lg text-sm sm:text-base">
              VIEW COURSE SCORE
            </button>
          </div>

          {/* Third Section */}
          <div className=" lg:flex exl:flex uws:flex gap-8 mt-10  ">
            {/* clock */}
            <div className=" rounded-lg    shadow-lg  flex xs:justify-center sm:justify-center ">
              <Clock time="10:00 PM" day="TODAY" />
            </div>
            {/* descripton */}
            <div className="bg-gray-100 w-full p-6  rounded-lg shadow-lg xs:mt-5 sm:mt-5 md:mt-8">
              <div className="flex justify-between font-bold text-sm lg:text-lg">
                <p>TOPIC</p>
                <p>DOWNLOAD LINKS</p>
              </div>
              <div className="mt-4 space-y-3 ">
                {downloads.map((params, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between xs:text-[10px] sm:text-[10px] text-[16px]  lg:text-base"
                  >
                    <p>{params.topic}</p>
                    <Link href="#" className="text-red-600 hover:underline">
                      {params.downloadLinks}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Student_panel>
    </div>
  );
};

export default Page;
