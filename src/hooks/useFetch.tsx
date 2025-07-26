import { useEffect, useState } from 'react';

import { useErrorBoundary } from 'react-error-boundary';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

/**
 * Custom React hook to fetch data from a given URL.
 *
 * @template T - The expected shape of the data returned from the fetch call.
 * @param {string} url - The API endpoint or mock data URL to fetch data from.
 * @returns {FetchState<T>} An object containing the fetched data, loading status, and any error message.
 *
 * @example
 * const { data, loading, error } = useFetch<User[]>('/mock/users.json')
 */

export default function useFetch<T>(url: string): FetchState<T> {
    const { showBoundary } = useErrorBoundary();

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = (await response.json()) as T;
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An error occurred during api call');
                }
                showBoundary(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch((err) => {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An error occurred during api call');
            }
        });
    }, [url, showBoundary]);

    return { data, loading, error };
}
