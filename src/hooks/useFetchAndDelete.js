import { useMutation, useQuery, useQueryClient } from "react-query";

const useFetchAndDelete = (
  key,
  obtenerItems,
  eliminarItem,
  transformarDatosTabla
) => {
  const { data, isLoading, error } = useQuery(key, obtenerItems);

  const queryClient = useQueryClient();

  const eliminar = useMutation(eliminarItem, {
    onSuccess: (_, variables) => {
      const items = queryClient.getQueryData(key);

      const dataElementDeleted = items.data.filter(
        (deporte) => deporte.id !== variables
      );

      items.data = [...dataElementDeleted];

      queryClient.setQueryData(key, items);
    },
  });

  if (isLoading) {
    return { isLoading: true, [key]: [] };
  }

  if (error) {
    return { isLoading: false, error, [key]: [] };
  }

  let datos = data.data;

  if(transformarDatosTabla){
     datos = data ? transformarDatosTabla(data) : []
  }

  return { isLoading: false, [key]: datos, eliminar };
};

export { useFetchAndDelete };
