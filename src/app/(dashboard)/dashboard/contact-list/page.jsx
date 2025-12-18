import DashboardClientLayout from '@/component/dashboard-layout/DashboardClientLayout';
import ContactList from '@/component/dashboard/ContactList';
import React from 'react';

const page = () => {
    return (
        <div>
           <DashboardClientLayout>
            <ContactList/>
            </DashboardClientLayout> 
        </div>
    );
};

export default page;