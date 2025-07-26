import { createBrowserRouter } from 'react-router';

import Dashboard from '@layouts/Dashboard';
import Overview from '@pages/dashboard/Overview';
import NotFound from '@pages/NotFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <Overview />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;
