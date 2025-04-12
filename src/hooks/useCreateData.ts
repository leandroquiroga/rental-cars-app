import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formSchema } from '@/utils/functions';
import { z } from 'zod';
import axios from "axios";

type Values = z.infer<typeof formSchema>


const createDataBaseServices = async (values: Values) => {
  try {
    const url = `/api/cars`;
    await axios.post(url, values);
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error creating car');
  };
}


export const useCreateData = () => {

  //con el queryClient refetcheamos a la lista de autos automáticamente después de crear uno nuevo, asegurando que la UI esté actualizada.
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: Values) => createDataBaseServices(values),
    onError: (error) => console.log(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
};