import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';
import routes from 'routes';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ContextProvider } from '@context/DataContext';
import Error from '@pages/Error';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <CssBaseline />
                <ErrorBoundary fallback={<Error />}>
                    <RouterProvider router={routes} />
                </ErrorBoundary>
            </ContextProvider>
        </ThemeProvider>
    </StrictMode>,
);
