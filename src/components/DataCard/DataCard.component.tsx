import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { DataCardPropsInterface } from './DataCard.types';

export const DataCard = ({
    title,
    description,
    value,
    avatar,
}: DataCardPropsInterface) => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={2}
        >
            <Box display="flex" alignItems="center" gap={2}>
                {avatar && <Avatar src={avatar} alt={title} />}
                <Box>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {description}
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" gap={1}>
                <Typography variant="h4">{value}</Typography>
                {!avatar && (
                    <Typography variant="caption" color="textSecondary">
                        sales
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
