import { useNavigate } from 'react-router';

import notFound from '@assets/images/notFound.webp';
import { StatusPage } from '@components/StatusPage';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <StatusPage
            title="Page Not Found"
            description="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
            imageUrl={notFound}
            imageAlt="404 Not Found"
            buttonText="Go back home"
            onClickHandler={() => {
                navigate('/');
            }}
        />
    );
};
