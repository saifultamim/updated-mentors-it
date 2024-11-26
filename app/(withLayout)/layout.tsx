import Footer from '@/shared_comp/Footer/Footer';
import Navbar from '@/shared_comp/Navbar/Navbar';
import React from 'react';

const layout = ({children,}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <div className=''>
            <Navbar></Navbar>
            {children}
           <Footer></Footer>
        </div>
    );
};

export default layout;