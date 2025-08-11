import { useContext } from 'react';

import { useNavigate } from 'react-router';

import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { DataContext } from '@context/DataContext';

export const Notification = () => {
    const { user } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <IconButton
            size="large"
            aria-label="show notifications"
            sx={({ palette }) => ({ color: palette.text.primary })}
            onClick={() => {
                navigate('/notifications');
            }}
        >
            <Badge badgeContent={user.notifications} color="success">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};
