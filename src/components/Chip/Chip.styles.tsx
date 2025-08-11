import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing }) => ({
    chip: {
        textWrap: 'nowrap',
        marginLeft: spacing(8),

        '& .MuiBadge-badge': {
            padding: spacing(3, 4),
        },
    },
}));
