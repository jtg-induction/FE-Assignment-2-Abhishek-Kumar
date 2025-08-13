import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router';

import { NavbarSidebarLayout } from '@layouts/NavbarSidebarLayout';
import { Overview } from '@pages/dashboard/Overview';
import { Error } from '@pages/Error';
import { NotFound } from '@pages/NotFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundary fallback={<Error />}>
                <NavbarSidebarLayout />
            </ErrorBoundary>
        ),
        children: [
            {
                index: true,
                element: <Overview />,
            },
        ],
    },
    {
        path: '*',
        element: (
            <ErrorBoundary fallback={<Error />}>
                <NotFound />
            </ErrorBoundary>
        ),
    },
]);

export default routes;
