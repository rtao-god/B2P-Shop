import { useState, useEffect } from 'react';

interface Notification {
  title: string;
  message: string;
}

interface Config {
  notifications: Notification[];
}

const baseURL = import.meta.env.VITE_API_BASE_URL; 

function useConfig(endpoint: string): { config: Config | null; isLoading: boolean; error: Error | null } {
  const [config, setConfig] = useState<Config | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseURL}${endpoint}`) 
      .then((response) => response.json())
      .then((data: Config) => {
        setConfig(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(new Error(err.message));
        setIsLoading(false);
      });
  }, [endpoint]);

  return { config, isLoading, error };
}

export default useConfig;
