import { makeStyles } from 'tss-react/mui';

import { Theme } from '@mui/material';

export const useStyles = makeStyles()((theme: Theme) => ({
    autoSearch: {
        borderRadius: theme.spacing(16),
        backgroundColor: theme.palette.background.default,
        width: '100%',
        ' & .MuiInputBase-root': {
            borderRadius: theme.spacing(4),
            py: theme.spacing(1),
            maxHeight: theme.spacing(11),
        },
    },
}));
