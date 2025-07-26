import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/dashboard/Dashboard';
import Overview from '@pages/dashboard/Overview';
import Error from '@pages/Error';
import NotFound from '@pages/NotFound';

const App = () => {
    return (
        <ErrorBoundary fallback={<Error />}>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Overview />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </ErrorBoundary>
    );
};

export default App;
