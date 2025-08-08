import Box from '@mui/material/Box';

import { ImageGrid } from '@components/ImageGrid';
import { Sales } from '@components/Sales';

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
            Overview
        </Box>
    );
};
