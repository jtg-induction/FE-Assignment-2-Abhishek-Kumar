import { useState } from 'react';

import { Outlet } from 'react-router';

import { Box } from '@mui/material';

import { Navbar } from '@components/Navbar';
import { Sidebar } from '@components/Sidebar';
import { drawerWidthLg } from '@components/Sidebar/Sidebar.constant';

export const NavbarSidebarLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <Box sx={{ ml: { sm: 0, lg: `${drawerWidthLg}px` } }} mt={16}>
                <Outlet />
            </Box>
        </div>
    );
};
