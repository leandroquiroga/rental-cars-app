import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


type OrderBy = 'asc' | 'desc';
type MethodType = 'findMany' | 'findUnique';

export interface Cars {
  id: string;
  userid: string;
  name: string;
  cv: string;
  transmission: string;
  people: string;
  photo: string;
  priceDay: string;
  engine: string;
  type: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Response {
  response: Cars[];
  loading: boolean;
  error: Error | null;
}

const findOneDatabase = async (method: MethodType, id: string) => {
  try {
    const url = `/api/cars?method=${method}&id=${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error fetching cars');
  };
};

const findManyDatabase = async (method: MethodType, orderBy: OrderBy) => {
  try {
    const url = `/api/cars?method=${method}&orderBy=${orderBy}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error fetching cars');
  };
}

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

export const useDataBase = (method: MethodType, orderBy: OrderBy, id: string): Response => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: () => fetchDatabase(orderBy, method, id),
    retry: 3,
    enabled: !!id && !!method,
  });

  return {
    response: data,
    error: error,
    loading: isLoading,
  }

}