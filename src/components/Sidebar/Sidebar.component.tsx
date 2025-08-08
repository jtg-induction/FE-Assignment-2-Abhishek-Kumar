import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';

import { SidebarFooter } from '@components/SidebarFooter';
import { SidebarItem } from '@components/SidebarItem';
import { SidebarNestedItem } from '@components/SidebarNestedItem';
import { useBreakPoints } from '@hooks/useBreakPoint';

import { sidebarData } from './Sidebar.config';
import { useStyles } from './Sidebar.styles';
import { SidebarPropsInterface } from './Sidebar.types';

export const Sidebar = ({ isOpen, setIsOpen }: SidebarPropsInterface) => {
    const { isDesktop } = useBreakPoints();
    const { classes } = useStyles();

    const drawer = (
        <List>
            {sidebarData.map((item, index) =>
                item.path ? (
                    <SidebarItem
                        Icon={item.icon}
                        label={item.label}
                        path={item.path}
                        divider={item.divider}
                        badge={item.badge}
                        key={index}
                    />
                ) : (
                    <SidebarNestedItem
                        Icon={item.icon}
                        label={item.label}
                        divider={item.divider}
                        subItems={item.children}
                        key={index}
                    />
                ),
            )}
        </List>
    );

    return (
        <Box
            component="nav"
            className={classes.drawerContainer}
            aria-label="sidebar"
        >
            <Drawer
                variant={isDesktop ? 'permanent' : 'temporary'}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className={classes.drawer}
            >
                <Stack height="94%" justifyContent="space-between">
                    {drawer}
                    <SidebarFooter />
                </Stack>
            </Drawer>
        </Box>
    );
};
