import { makeStyles } from 'tss-react/mui';

import { Theme } from '@mui/material';

export const useStyles = makeStyles()(
    ({ palette, breakpoints, spacing }: Theme) => ({
        header: {
            backgroundColor: palette.background.paper,
            boxShadow: 'none',
        },

        menuButton: {
            marginRight: spacing(4),
            [breakpoints.up('lg')]: {
                display: 'none',
            },
        },

        logoContainer: {
            display: 'none',
            [breakpoints.up('lg')]: {
                display: 'flex',
            },
        },

        autoSearchContainer: {
            borderRadius: spacing(4),
            minWidth: spacing(100),
            display: 'none',

            [breakpoints.up('md')]: {
                display: 'block',
            },
        },
    }),
);
