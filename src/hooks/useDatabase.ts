import { formSchema } from '@/utils/functions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

type OrderBy = 'asc' | 'desc';
type MethodType = 'findMany' | 'findUnique';
type Values = z.infer<typeof formSchema>

interface UseDataBase {
  values: Values;
  orderBy: OrderBy
  method: MethodType
  id: string
};


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
    const queryParsed = JSON.stringify(orderBy);
    const url = `/api/cars?method=${method}&orderBy=${queryParsed}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error fetching cars');
  };
}

const createDataBaseServices = async (values: Values) => {
  try {
    const url = `/api/cars`;
    await axios.post(url, values);
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error creating car');
  };
}

const fetchDatabase = async (orderBy: OrderBy, method: MethodType, values: Values, id: string) => {
  const methods = {
    findMany: await findOneDatabase(method, id),
    findUnique: await findManyDatabase(method, orderBy),
    create: await createDataBaseServices(values),
  };
  const selectedMethod = methods[method];
  if (!selectedMethod) {
    throw new Error(`Método no soportado: ${method}`);
  }

  return selectedMethod();
};

export const useDataBase = ({ orderBy, values, method, id }: UseDataBase) => {

  const { data, isError, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: () => fetchDatabase(orderBy, method, values, id),
    retry: 3,
    enabled: !orderBy && !method,
  });

  return {
    response: data,
    error: isError,
    loading: isLoading,
  }

}