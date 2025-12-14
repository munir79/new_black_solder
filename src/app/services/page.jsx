import Services from '@/component/nav-route/service/Services';
import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import React from 'react';

const page = () => {
    return (
        <div>
           <PublicLayOut>
             <Services/>
           </PublicLayOut>
        </div>
    );
};

export default page;