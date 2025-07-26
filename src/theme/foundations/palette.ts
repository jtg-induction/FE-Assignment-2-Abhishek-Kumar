import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY[500],
        dark: COLORS.PRIMARY[800],
        light: COLORS.PRIMARY[100],
    },

    text: {
        primary: COLORS.TEXT[900],
        secondary: COLORS.TEXT[500],
        disabled: COLORS.TEXT[300],
    },

    error: {
        main: COLORS.RED[500],
        dark: COLORS.RED[800],
        light: COLORS.RED[200],
    },

    info: {
        main: COLORS.BLUE[500],
        dark: COLORS.BLUE[800],
        light: COLORS.BLUE[100],
    },

    background: {
        default: COLORS.TEXT[50],
        paper: COLORS.WHITE,
    },
};
