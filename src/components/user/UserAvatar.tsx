import React, { useContext } from 'react';

import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';

import { DataContext } from '@context/DataContext';

const UserAvatar = () => {
    const { user } = useContext(DataContext);

    const [avatarAnchorEl, setAvatarAnchorEl] =
        React.useState<HTMLButtonElement | null>(null);

    /**
     *  Open user details popover
     * @param event React mouse event
     * @returns none
     */
    const handleAvatarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAvatarAnchorEl(event.currentTarget);
    };

    /**
     * Close user details popover
     */
    const handleAvatarClose = () => {
        setAvatarAnchorEl(null);
    };

    const open = Boolean(avatarAnchorEl);
    const id = open ? 'user-popover' : undefined;

    return (
        <Box>
            <IconButton
                onClick={handleAvatarClick}
                aria-label="user details popover"
            >
                <Avatar
                    alt="user image"
                    src={user?.avatar}
                    sx={{ width: 32, height: 32 }}
                />
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={avatarAnchorEl}
                onClose={handleAvatarClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <List sx={{}}>
                    <ListItem>
                        <ListItemText>{user?.name}</ListItemText>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText>{user?.email}</ListItemText>
                    </ListItem>
                </List>
            </Popover>
        </Box>
    );
};

export default UserAvatar;
