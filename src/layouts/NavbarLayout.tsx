import { ReactNode, useState } from 'react';

import Box from '@mui/material/Box';

import { Navbar } from '@components/Navbar';
import { Sidebar } from '@components/Sidebar';

export const NavbarLayout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                isDesktopHidden={true}
            />
            {/* Header height is 16 * 4 = 64px */}
            <Box mt={16}>{children}</Box>
        </>
    );
};
