import { Outlet } from 'react-router';

import { Navbar } from '@components/Navbar';

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};
