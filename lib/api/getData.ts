type FetchDataParams = {
  endpoint: string;
  params?: Record<string, string | number | boolean>;
};

export const getData = async <T>({
  endpoint,
  params,
}: FetchDataParams): Promise<T> => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const url = new URL(baseUrl + endpoint);

  // Append query parameters only if the value is non-empty
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  console.log(url.toString());

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(
        `Failed to fetch from ${url}. HTTP Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
};
