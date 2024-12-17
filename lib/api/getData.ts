type FetchDataParams = {
    endpoint: string;
    params?: Record<string, string | number | boolean>;
  };
  
  export const getData = async <T>({ endpoint, params }: FetchDataParams): Promise<T> => {
    const url = (process.env.NEXT_PUBLIC_API_BASE_URL + endpoint) || 'http://localhost:3000';

    // Add query parameters if provided
    // if (params) {
    //   Object.keys(params).forEach((key) => {
    //     const value = params[key];
    //     fullUrl.searchParams.append(key, String(value));  // Ensure all values are converted to strings
    //   });
    // }
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}. HTTP Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
      throw error;
    }
  };
  