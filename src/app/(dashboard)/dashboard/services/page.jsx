import DashboardClientLayout from '@/component/dashboard-layout/DashboardClientLayout';
import ServiceManager from '@/component/dashboard/ServiceManager';
import React from 'react';

const page = () => {
    return (
        <div>
         <DashboardClientLayout>
            <ServiceManager/>
         </DashboardClientLayout>
        </div>
    );
};

export default page;