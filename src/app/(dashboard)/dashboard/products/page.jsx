import DashboardClientLayout from '@/component/dashboard-layout/DashboardClientLayout';
import ProductManager from '@/component/dashboard/ProductManager';
import React from 'react';

const page = () => {
    return (
        <div>
            <DashboardClientLayout>
                <ProductManager/>
            </DashboardClientLayout>
        </div>
    );
};

export default page;