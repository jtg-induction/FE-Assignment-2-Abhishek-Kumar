import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing }) => ({
    tableContainer: {
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
    },

    tableBase: {
        minWidth: spacing(160),
        marginTop: spacing(4),
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: 0,
    },

    headerLabel: {
        fontWeight: 600,
        textTransform: 'uppercase',
    },

    tableEntries: {
        '& .MuiTableCell-root': {
            border: 0,
        },
    },

    statusChip: {
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        textWrap: 'nowrap',
    },

    transactionColumn: {
        borderTopLeftRadius: spacing(3),
        borderBottomLeftRadius: spacing(3),
    },

    statusColumn: {
        borderTopRightRadius: spacing(3),
        borderBottomRightRadius: spacing(3),
    },
}));
