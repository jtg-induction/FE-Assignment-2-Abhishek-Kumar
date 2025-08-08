import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { sidebarFooterData } from './SidebarFooter.config';

export const SidebarFooter = () => {
    const navigate = useNavigate();
    return (
        <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent="center"
            my={2}
        >
            {sidebarFooterData?.map(({ Icon, path }, index) => (
                <IconButton
                    key={index}
                    sx={({ palette }) => ({ color: palette.text.primary })}
                    onClick={() => {
                        navigate(path);
                    }}
                >
                    <Icon />
                </IconButton>
            ))}
        </Box>
    );
};
