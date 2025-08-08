import { useContext } from 'react';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DataCard } from '@components/DataCard';
import { DataContext } from '@context/DataContext';
import { formatNumber } from '@utils/formatNumber';

export const TopProducts = () => {
    const { products } = useContext(DataContext);

    return (
        <Paper sx={{ p: 6, borderRadius: 4 }}>
            <Typography variant="h3">Top Products</Typography>

            <Stack mt={4}>
                {products
                    .sort((a, b) => b.saleCount - a.saleCount)
                    .slice(0, 6)
                    .map((item, index) => {
                        return (
                            <>
                                <DataCard
                                    title={item.name}
                                    description={item.category}
                                    value={formatNumber(item.saleCount)}
                                    caption="sales"
                                    key={index}
                                />
                                {index < products.length - 1 && index < 5 && (
                                    <Divider />
                                )}
                            </>
                        );
                    })}
            </Stack>
        </Paper>
    );
};
