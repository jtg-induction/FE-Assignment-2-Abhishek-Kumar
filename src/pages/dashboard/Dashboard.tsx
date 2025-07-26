import { Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div>
            Dashboard
            <Outlet />
        </div>
    );
};

export default Dashboard;
