import { useState, useEffect } from 'react';

function useApi<T>(endpoint: string): { data: T | null; isLoading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseURL}${endpoint}`);
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, baseURL]);

  return { data, isLoading, error };
}

export default useApi;
