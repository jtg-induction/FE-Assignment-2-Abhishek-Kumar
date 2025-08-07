import { Grid2 as Grid } from '@mui/material';
import Box from '@mui/material/Box';

import { Footer } from '@components/Footer';
import { ImageGrid } from '@components/ImageGrid';
import { LatestCustomers } from '@components/LatestCustomers';
import { Sales } from '@components/Sales';
import { TopProducts } from '@components/TopProducts';
import { Transactions } from '@components/Transactions';

export const Overview = () => {
    return (
        <Box
            color="primary"
            p={4}
            display="flex"
            flexDirection="column"
            gap={4}
        >
            <ImageGrid />
            <Sales />
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, lg: 5, xl: 3 }}>
                    <LatestCustomers />
                </Grid>
                <Grid size={{ xs: 12, lg: 7, xl: 9 }}>
                    <TopProducts />
                </Grid>
            </Grid>
            <Transactions />
            <Footer />
        </Box>
    );
};
