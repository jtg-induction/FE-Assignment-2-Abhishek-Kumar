/**
 * Utility functions for formatting dates.
 * @param isoDate ISO date string
 * @returns Formatted date string (e.g., "1 Oct")
 * @example: "2023-10-01T00:00:00Z" -> "1 Oct"
 */
export function formatShortDate(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    return `${day} ${month}`;
}

/**
 * Utility functions for formatting dates.
 * @param isoDate ISO date string
 * @returns Formatted date string (e.g., "1 Oct 2023")
 * @example: "2023-10-01T00:00:00Z" -> "1 Oct 2023"
 */
export function formatDateWithYear(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}
