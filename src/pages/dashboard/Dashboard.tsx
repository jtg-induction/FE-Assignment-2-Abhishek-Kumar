import { Outlet } from 'react-router';

const Dashboard: React.FC = () => {
    return (
        <div>
            Dashboard
            <Outlet />
        </div>
    );
};

export default Dashboard;
