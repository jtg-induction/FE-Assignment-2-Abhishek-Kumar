import { useState } from 'react';

import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useStyles } from './SidebarNestedItem.styles';
import { SidebarNestedItemProps } from './SidebarNestedItem.types';

export const SidebarNestedItem = ({
    Icon,
    subItems,
    label,
    divider,
}: SidebarNestedItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = subItems?.some((item) => item.path === location.pathname);

    const { classes } = useStyles();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton
                onClick={handleClick}
                selected={isActive}
                className={classes.itemButton}
            >
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div">
                    {subItems?.map((item, index) => {
                        return (
                            <ListItemButton
                                sx={{ pl: 18 }}
                                key={index}
                                selected={location.pathname === item.path}
                                className={classes.subItemButton}
                                onClick={() => {
                                    navigate(item.path);
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
            {divider && <Divider />}
        </>
    );
};
