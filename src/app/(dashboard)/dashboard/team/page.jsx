import DashboardClientLayout from '@/component/dashboard-layout/DashboardClientLayout';
import TeamManager from '@/component/dashboard/TeamManager';
import React from 'react';

const page = () => {
    return (
        <div>
           <DashboardClientLayout>
            <TeamManager/>
            </DashboardClientLayout> 
        </div>
    );
};

export default page;