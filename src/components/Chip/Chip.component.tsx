import Badge from '@mui/material/Badge';

import { useStyles } from './Chip.styles';
import { ChipPropsInterface } from './Chip.types';

export const Chip = ({ label, variant }: ChipPropsInterface) => {
    const { classes } = useStyles();

    return (
        <Badge badgeContent={label} color={variant} className={classes.chip} />
    );
};
