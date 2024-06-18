import { useState, useEffect } from 'react';

function useApi(apiUrl) {
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setData(json);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // claenaup function
    return () => {
      setData(null);
      setIsLoading(true);
      setError(null);
    };
  }, [apiUrl]);

  return { data, isLoading, error };
}

export default useApi;
