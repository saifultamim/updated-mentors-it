import LoginForm from '@/app/(auth)/login/page';
import Navbar from '@/shared_comp/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
          <Navbar></Navbar>
            <LoginForm role='Mentors Portal'></LoginForm>
        </div>
    );
};

export default page;