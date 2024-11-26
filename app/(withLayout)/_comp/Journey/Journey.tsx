import React from 'react';
import bg from '@/public/images/home/journey/bg.png';
import map from '@/public/images/home/journey/map.png';
import journey_img from '@/public/images/home/journey/journey_img.png';

import Image from 'next/image';

const Journey = () => {
    return (
        <div className="">
       
            <div className="flex flex-col items-center  relative">
                <div className="relative w-full">
                    <Image
                        alt="Background Image"
                        src={bg}
                        // layout="fill"
                        width={1920} // Ensure this matches your actual image's resolution or desired display size
                        height={1080}
                        quality={90} // Adjust quality for clarity; higher values may improve clarity
                        className="w-full"
                    />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6">
                    <Image
                        alt="Map Image"
                        src={map}
                        // layout="responsive"
                        width={800} // Ensure width and height match your image's aspect ratio
                        height={400}
                        quality={90}
                        className="border border-green-600  md:h-[200px] lg:h-[328px] uws:h-[450px] w-full"
                    />
                </div>

                <div className="absolute  left-14 top-9  md:left-20 uws:left-80 md:top-20 lg:left-48 lg:top-36 exl:top-44 uws:top-96 w-[200px] md:w-[500px] lg:w-[500px] flex">
                    <Image
                        alt="Journey Image"
                        src={journey_img}
                        // layout="responsive"
                        width={500}
                        height={250}
                        quality={90}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Journey;
