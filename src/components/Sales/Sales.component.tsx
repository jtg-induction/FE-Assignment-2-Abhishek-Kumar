import { useEffect } from 'react';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { LineCharts } from '@components/LineCharts';
import { useFetch } from '@hooks/useFetch';
import { SalesDataInterface } from '@models/sales';

export const Sales = () => {
    const { data, fetchData } = useFetch<SalesDataInterface[]>();

    // Fetch sales data from the JSON file
    useEffect(() => {
        fetchData({
            url: '/data/sales.json',
            method: 'GET',
        });
    }, []);

    return (
        <Paper sx={{ p: 8, borderRadius: 4 }}>
            <Box display="flex" alignItems="center">
                <Typography variant="h3">Sales</Typography>
                <Tooltip title="Sales data">
                    <IconButton>
                        <ErrorOutlineIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Box height={350} width={'100%'} mt={8}>
                {data && (
                    <LineCharts
                        data={data.map((item) => ({
                            name: item.date,
                            sale: item.amount,
                        }))}
                    />
                )}
            </Box>
        </Paper>
    );
};
