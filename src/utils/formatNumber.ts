/**
 * A utility function to format numbers into a more readable string.
 * @param value Number to format
 * @description Formats a number into a more readable string with suffixes for thousands (K), millions (M), and billions (B).
 * @returns Formatted number string
 * @example: 1500 -> "1.5K", 2500000 -> "2.5M", 3000000000 -> "3B"
 */
export function formatNumber(value: number): string {
    const absValue = Math.abs(value);

    if (absValue >= 1000000000) {
        return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }

    if (absValue >= 1000000) {
        return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    if (absValue >= 1000) {
        return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return value.toString();
}
