import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import SinglePage from '@/component/singlepage/SinglePage';
import React from 'react';

const page = () => {
    return (
        <div>
            <PublicLayOut>
                <SinglePage/>
            </PublicLayOut>
        </div>
    );
};

export default page;