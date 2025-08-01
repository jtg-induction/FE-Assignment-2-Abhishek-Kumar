import { makeStyles } from 'tss-react/mui';

import { Theme } from '@mui/material';

export const useStyles = makeStyles()(
    ({ palette, breakpoints, spacing }: Theme) => ({
        header: {
            backgroundColor: palette.background.paper,
            boxShadow: 'none',
        },

        'menu-button': {
            mr: spacing(4),
            [breakpoints.up('lg')]: {
                display: 'none',
            },
        },

        'logo-container': {
            display: 'none',
            [breakpoints.up('lg')]: {
                display: 'flex',
            },
        },

        'auto-search-container': {
            borderRadius: spacing(4),
            minWidth: spacing(100),
            display: 'none',

            [breakpoints.up('md')]: {
                display: 'block',
            },
        },
    }),
);
