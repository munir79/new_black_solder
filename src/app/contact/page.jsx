import ContactForm from '@/component/contact/ContactForm';
import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import React from 'react';

const page = () => {
    return (
        <div>
            <PublicLayOut>
                <ContactForm/>
            </PublicLayOut>
        </div>
    );
};

export default page;