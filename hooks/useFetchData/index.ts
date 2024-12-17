import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getData } from '@/lib/api/getData';

type UseFetchDataParams = {
  endpoint: string;
  params?: Record<string, string | number | boolean>; 
  queryKey?: QueryKey
  queryOptions?: UseQueryOptions<any, Error>;
};

export const useFetchData = <T>({
  endpoint,
  params,
  queryKey,
  queryOptions
}: UseFetchDataParams) => {
  const fetchData = async () => {
    return await getData<T>({ endpoint, params });
  };

  const { data, error, isLoading, isError, isSuccess } = useQuery<T, Error>({
    queryKey: [queryKey],
    queryFn: fetchData,
    ...queryOptions,
  });

  return {
    data,
    loading: isLoading,
    error: isError ? error?.message : null,
    success: isSuccess,
  };
};
