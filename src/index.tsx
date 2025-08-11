import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router';
import routes from 'routes';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { DataContextProvider } from '@context/DataContext';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <DataContextProvider>
                <CssBaseline />
                <RouterProvider router={routes} />
            </DataContextProvider>
        </ThemeProvider>
    </StrictMode>,
);
