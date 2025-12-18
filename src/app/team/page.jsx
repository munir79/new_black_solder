import ContactForm from '@/component/common/ContactForm';
import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import Team from '@/component/team/Team';
import React from 'react';

const page = () => {
    return (
        <div>
            <PublicLayOut>
                <Team/>
                <ContactForm/>
            </PublicLayOut>
        </div>
    );
};

export default page;