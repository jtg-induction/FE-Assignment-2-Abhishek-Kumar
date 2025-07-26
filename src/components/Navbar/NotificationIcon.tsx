import { useContext } from 'react';

import { useNavigate } from 'react-router';

import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { DataContext } from '@context/DataContext';

const NotificationIcon = () => {
    const { user } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
            onClick={() => void navigate('/notifications')}
        >
            <Badge badgeContent={user?.notifications} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};

export default NotificationIcon;
