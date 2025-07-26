import { useContext, useEffect } from 'react';

import { Outlet } from 'react-router';

import Navbar from '@components/Navbar';
import { UserApiPath } from '@constant';
import { DataContext } from '@context/DataContext';
import useFetch from '@hooks/useFetch';
import { AuthUser } from '@models/user';

const Dashboard: React.FC = () => {
    const { setUser } = useContext(DataContext);
    const { fetchData, data } = useFetch<AuthUser>();

    useEffect(() => {
        const fetchUserDetails = async () => {
            await fetchData({
                url: String(UserApiPath),
                method: 'GET',
            });
            if (data) {
                setUser(data);
            }
        };
        void fetchUserDetails();
    });

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Dashboard;
