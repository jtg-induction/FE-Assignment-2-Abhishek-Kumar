import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { footerSocialLinks } from './Footer.config';

export const Footer = () => {
    return (
        <Paper sx={{ p: 12, borderRadius: 4 }}>
            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={{ sm: 'start', md: 'center' }}
                justifyContent="space-between"
                gap={8}
            >
                <Typography variant="h5" color="text.secondary">
                    © 2021 Themesberg, LLC. All rights reserved.
                </Typography>

                <Box display="flex" gap={2}>
                    {footerSocialLinks.map(({ Icon, label, path }, index) => (
                        <a
                            href={path}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Go to ${label} link`}
                        >
                            <IconButton
                                sx={({ palette }) => ({
                                    color: palette.text.primary,
                                })}
                            >
                                <Icon />
                            </IconButton>
                        </a>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};
