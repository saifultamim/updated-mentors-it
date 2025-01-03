import React from 'react';

const Button = ({params} : {params:{color: string;type: string;}}) => {
    console.log("+++++++++++" ,params)
    return (
        <div className='xs:w-6/6 sm:w-6/6 md:w-4/6 lg:w-4/6 exl:w-4/6 uws:w-4/6 mx-auto mt-4 mb-4'>
            <button  style={{ backgroundColor: params.color, }} className={`h-[43px] uws:h-[60px] w-full text-white rounded-[5px] montserat font-bold text-[12px] uws:text-[20px]`}>
                {params.type}
            </button>
        </div>
    );
};

export default Button;