import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createDataBaseServices } from "@/services"
import { Values } from "@/interfaces";


export const useCreateData = () => {

  //con el queryClient refetcheamos a la lista de autos automáticamente después de crear uno nuevo, asegurando que la UI esté actualizada.
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: Values) => createDataBaseServices(values),
    onError: (error) => console.log(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
};