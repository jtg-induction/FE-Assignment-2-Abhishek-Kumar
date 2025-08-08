import { useNavigate } from 'react-router';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { sidebarFooterData } from './SidebarFooter.config';

export const SidebarFooter = () => {
    const navigate = useNavigate();
    return (
        <Stack
            direction="row"
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
        </Stack>
    );
};
