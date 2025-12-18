import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import SingleServicePage from '@/component/singlepage/SingleServicePage';
import React from 'react';

const page = () => {
    return (
        <div>
            <PublicLayOut>
                <SingleServicePage/>
            </PublicLayOut>
        </div>
    );
};

export default page;