import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ContextProvider } from '@context/DataContext';
import { theme } from '@theme';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ContextProvider>
                    <App />
                </ContextProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
