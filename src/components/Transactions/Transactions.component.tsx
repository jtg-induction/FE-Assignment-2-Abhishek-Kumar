import { useEffect } from 'react';

import { Paper, Typography } from '@mui/material';

import { TransactionTable } from '@components/TransactionTable';
import { apiUrls } from '@constant';
import { useFetch } from '@hooks/useFetch';
import { TransactionInterface } from '@models/transaction';

export const Transactions = () => {
    const { data, fetchData } = useFetch<TransactionInterface[]>();

    useEffect(() => {
        fetchData({
            url: apiUrls.GET_LATEST_TRANSACTIONS,
            method: 'GET',
        });
    }, []);

    return (
        <Paper sx={{ p: 6, borderRadius: 4 }}>
            <Typography variant="h3">Transactions</Typography>
            <Typography variant="body1" color="textSecondary">
                This is a list of latest transactions.
            </Typography>
            {data ? (
                <TransactionTable data={data} />
            ) : (
                <Typography variant="body1" color="textSecondary">
                    Loading...
                </Typography>
            )}
        </Paper>
    );
};
