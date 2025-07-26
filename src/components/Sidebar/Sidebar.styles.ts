import { makeStyles } from 'tss-react/mui';

import { Theme } from '@mui/material';

import { drawerWidthLg, drawerWidthSm } from './Sidebar.constant';

export const useStyles = makeStyles()(
    ({ palette, breakpoints, spacing }: Theme) => ({
        drawerContainer: {
            '& .MuiDrawer-paper': {
                maxWidth: drawerWidthSm,
                [breakpoints.up('lg')]: {
                    maxWidth: drawerWidthLg,
                },
            },
        },
        drawer: {
            '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                boxShadow: 'none',
                width: drawerWidthSm,
                border: `1px solid ${palette.divider}`,
                // Margin taken as per header height
                marginTop: spacing(14),

                [breakpoints.up('sm')]: {
                    mt: spacing(16),
                },
            },
        },
    }),
);
