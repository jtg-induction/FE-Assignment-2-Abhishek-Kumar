import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { StatusPagePropsInterface } from './StatusPage.types';

export const StatusPage = ({
    imageUrl,
    imageAlt,
    title,
    description,
    onClickHandler,
    buttonText,
}: StatusPagePropsInterface) => {
    return (
        <Box
            width="100%"
            display="flex"
            height="90vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
        >
            <Box height={{ xs: 200, md: 400 }}>
                <Box
                    component="img"
                    src={imageUrl}
                    alt={imageAlt}
                    height="100%"
                />
            </Box>
            <Typography variant="h1" component="h1" textAlign="center">
                {title}
            </Typography>
            <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                fontWeight={400}
                textAlign="center"
            >
                {description}
            </Typography>

            <Button
                onClick={onClickHandler}
                variant="contained"
                sx={{ borderRadius: 3 }}
            >
                {buttonText}
            </Button>
        </Box>
    );
};
