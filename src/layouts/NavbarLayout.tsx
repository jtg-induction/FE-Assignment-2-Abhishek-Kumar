import { Outlet } from 'react-router';

import Box from '@mui/material/Box';

import { Navbar } from '@components/Navbar';

export const NavbarLayout = () => {
    return (
        <>
            <Navbar />
            {/* Header height is 16 * 4 = 64px */}
            <Box mt={16}>
                <Outlet />
            </Box>
        </>
    );
};
