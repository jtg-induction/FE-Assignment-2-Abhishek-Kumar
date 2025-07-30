import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface BreakpointsStates {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

/**
 * Custom hook for easily use different breakpoints
 *
 * @returns {BreakpointsStates} : Contain different views for conditional rendering
 */

export default function useBreakPoints(): BreakpointsStates {
    const { breakpoints } = useTheme();

    const isMobile: boolean = useMediaQuery(breakpoints.down('md'));
    const isTablet: boolean = useMediaQuery(breakpoints.between('md', 'lg'));
    const isDesktop: boolean = useMediaQuery(breakpoints.up('lg'));

    return { isMobile, isTablet, isDesktop };
}
