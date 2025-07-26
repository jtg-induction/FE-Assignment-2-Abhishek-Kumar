import { createBrowserRouter } from 'react-router';

import { NavbarLayout } from '@layouts/NavbarLayout';
import { NavbarSidebarLayout } from '@layouts/NavbarSidebarLayout';
import { Overview } from '@pages/dashboard/Overview';
import { NotFound } from '@pages/NotFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <NavbarSidebarLayout />,
        children: [
            {
                index: true,
                element: <Overview />,
            },
        ],
    },
    {
        path: '*',
        element: <NavbarLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;
