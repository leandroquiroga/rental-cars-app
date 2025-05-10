import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { MethodType, OrderBy, ResponseUseDataBase, TData, TError } from '@/interfaces';
import { findManyDatabase, findOneDatabase } from '@/services';


const fetchDatabase = async (orderBy: OrderBy, method: MethodType, id: string) => {
  const methods = {
    findUnique: await findOneDatabase(method, id),
    findMany: await findManyDatabase(method, orderBy),
  };
  const selectedMethod = methods[method];
  if (!selectedMethod) {
    throw new Error(`Método no soportado: ${method}`);
  }

  return selectedMethod;
};

export const useDataBase = (method: MethodType, orderBy: OrderBy, id: string): ResponseUseDataBase => {
  const queryOptions: UseQueryOptions<TData, TError> = {
    queryKey: ['data'],
    queryFn: () => fetchDatabase(orderBy, method, id),
    gcTime: 1000 * 60 * 5, // 5 minutes
    retry: 3,
    enabled: !!id && !!method,
  }

  const { data, error, isLoading } = useQuery(queryOptions);

  return {
    response: data,
    error: error,
    loading: isLoading,
  }

}