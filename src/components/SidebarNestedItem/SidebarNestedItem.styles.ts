import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ palette }) => ({
    itemButton: {
        '& .MuiListItemIcon-root': {
            color: palette.text.primary,
        },

        '&.Mui-selected': {
            background: 'none',
            color: palette.primary.main,

            '& .MuiListItemIcon-root': {
                color: palette.primary.main,
            },
        },
    },

    subItemButton: {
        '&.Mui-selected': {
            backgroundColor: 'none',
            color: palette.primary.main,
        },
    },
}));
