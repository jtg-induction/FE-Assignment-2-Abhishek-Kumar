import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Chip } from '@components/Chip';
import { TransactionInterface } from '@models/transaction';
import { formatMonthDayYear } from '@utils/dateFormatter';
import { formatNumber } from '@utils/formatNumber';

import { statusMapping, tableHeaderConfig } from './TransactionTable.config';
import { useStyles } from './TransactionTable.styles';
import { TransactionTablePropsInterface } from './TransactionTable.types';

export const TransactionTable = ({ data }: TransactionTablePropsInterface) => {
    const { classes } = useStyles();

    return (
        <TableContainer className={classes.tableContainer}>
            <Table className={classes.tableBase} aria-label="transaction table">
                <TableHead>
                    <TableRow>
                        {tableHeaderConfig.map((header, index) => (
                            <TableCell
                                key={header.id}
                                sx={{
                                    backgroundColor: 'background.default',
                                    ...(index === 0 && {
                                        borderTopLeftRadius: 12,
                                    }),
                                    ...(index ===
                                        tableHeaderConfig.length - 1 && {
                                        borderTopRightRadius: 12,
                                    }),
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    className={classes.headerLabel}
                                >
                                    {header.label}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data
                        .slice(0, 6)
                        .map((item: TransactionInterface, index) => (
                            <TableRow
                                key={index}
                                className={classes.tableEntries}
                                sx={{
                                    ...(index % 2 === 1 && {
                                        backgroundColor: 'background.default',
                                    }),
                                }}
                            >
                                <TableCell
                                    className={classes.transactionColumn}
                                >
                                    <Typography
                                        variant="body1"
                                        component="span"
                                    >
                                        {item.message.replace(item.name, '')}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        fontWeight={600}
                                    >
                                        {item.name}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        {formatMonthDayYear(item.date)}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography variant="h5">
                                        {item.type === 'Debit' ? '-' : ''}$
                                        {formatNumber(item.amount)}
                                    </Typography>
                                </TableCell>

                                <TableCell className={classes.statusColumn}>
                                    <Chip
                                        label={statusMapping[item.status].label}
                                        variant={
                                            statusMapping[item.status].variant
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
