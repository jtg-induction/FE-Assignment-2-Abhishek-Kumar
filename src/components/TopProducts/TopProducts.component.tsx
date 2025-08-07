import { useContext } from 'react';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DataCard } from '@components/DataCard';
import { DataContext } from '@context/DataContext';

export const TopProducts = () => {
    const { products } = useContext(DataContext);

    return (
        <Paper sx={{ p: 6, borderRadius: 4 }}>
            <Typography variant="h3">Top Products</Typography>

            <Stack mt={4}>
                {products &&
                    products.slice(0, 6).map((item, index) => {
                        return (
                            <>
                                <DataCard
                                    title={item.name}
                                    description={item.category}
                                    value={item.saleCount}
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
