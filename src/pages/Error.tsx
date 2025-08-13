import { useNavigate } from 'react-router';

import ErrorImage from '@assets/images/ErrorImage.webp';
import { StatusPage } from '@components/StatusPage';
import { NavbarLayout } from '@layouts/NavbarLayout';

export const Error = () => {
    const navigate = useNavigate();
    return (
        <NavbarLayout>
            <StatusPage
                title="Something has gone seriously wrong"
                description="It’s always time for a coffee break, We should be back by the time you finish your coffee."
                buttonText="Go back home"
                imageUrl={ErrorImage}
                imageAlt="Error Image"
                onClickHandler={() => {
                    navigate('/');
                }}
            />
        </NavbarLayout>
    );
};
