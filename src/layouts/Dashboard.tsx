import { Outlet } from 'react-router';

import { Navbar } from '@components/Navbar';

export const Dashboard: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};
