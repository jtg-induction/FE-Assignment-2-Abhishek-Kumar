import { useLocation } from 'react-router';

import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useStyles } from './SidebarItem.style';
import { SidebarItemProps } from './SidebarItem.types';

export const SidebarItem = ({
    label,
    Icon,
    path,
    badge,
    divider,
}: SidebarItemProps) => {
    const location = useLocation();
    const { classes } = useStyles();

    return (
        <>
            <ListItem key={label} disablePadding>
                <ListItemButton
                    href={path}
                    className={classes.itemButton}
                    selected={location.pathname === path}
                >
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                    {badge && <Badge badgeContent={badge} color="error" />}
                </ListItemButton>
            </ListItem>
            {divider && <Divider />}
        </>
    );
};
