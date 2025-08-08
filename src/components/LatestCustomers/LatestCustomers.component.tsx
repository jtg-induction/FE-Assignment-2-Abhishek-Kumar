import { useEffect } from 'react';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DataCard } from '@components/DataCard';
import { apiUrls } from '@constant';
import { useFetch } from '@hooks/useFetch';
import { CustomerInterface } from '@models/customer';
import { formatNumber } from '@utils/formatNumber';

export const LatestCustomers = () => {
    const { fetchData, data } = useFetch<CustomerInterface[]>();

    useEffect(() => {
        fetchData({
            url: apiUrls.GET_LATEST_CUSTOMERS,
            method: 'GET',
        });
    }, []);

    return (
        <Paper sx={{ p: 6, borderRadius: 4 }}>
            <Typography variant="h3">Latest Customers</Typography>

            <Stack mt={4}>
                {data &&
                    data.slice(0, 6).map((item, index) => {
                        return (
                            <>
                                <DataCard
                                    title={item.name}
                                    description={item.email}
                                    value={`$${formatNumber(item.amountSpent)}`}
                                    avatar={item.avatar}
                                    key={index}
                                />
                                {index < data.length - 1 && index < 5 && (
                                    <Divider />
                                )}
                            </>
                        );
                    })}
            </Stack>
        </Paper>
    );
};
