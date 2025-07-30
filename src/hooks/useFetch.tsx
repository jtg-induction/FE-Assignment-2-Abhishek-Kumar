import { useCallback, useState } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    fetchData: (params: FetchParams) => Promise<void>;
}

interface FetchParams {
    url: string;
    method: string;
    header?: HeadersInit;
    body?: BodyInit | null;
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

export default function useFetch<T>(): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async (params: FetchParams) => {
        setLoading(true);
        try {
            const response = await fetch(params?.url, {
                method: params?.method,
                headers: params?.header,
                body: params?.body,
            });
            const result = (await response.json()) as T;
            setData(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An error occurred during api call');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchData, data, loading, error };
}
