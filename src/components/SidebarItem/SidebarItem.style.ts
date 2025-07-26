import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ palette, spacing }) => ({
    itemButton: {
        '& .MuiListItemIcon-root': {
            color: palette.text.primary,
        },

        '& .MuiBadge-badge': {
            marginRight: spacing(3),
            color: palette.error.dark,
            backgroundColor: palette.error.light,
        },

        '&.Mui-selected': {
            background: 'none',
            color: palette.primary.main,
            '& .MuiListItemIcon-root': {
                color: palette.primary.main,
            },
        },
    },
}));
