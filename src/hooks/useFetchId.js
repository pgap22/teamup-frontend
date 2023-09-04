import { useQuery } from "react-query";
import { useTranlate } from "./useTranslation";

const useFetchId = (id, obtenerItem, key, transformarDatosTabla) => {
  const {t} = useTranlate();

  const { data, isLoading, error, refetch, status } = useQuery([key, id], () => obtenerItem(id), {refetchOnWindowFocus: false, cacheTime: 0, retry: false}); 

  if (isLoading) {
    return { isLoading: true, [key]: {},registroExitoso: status=='success' };
  }

  if (error) {
    return { isLoading: false, error, [key]: {},registroExitoso: status=='success' };
  }

  let datos = data.data;

  if (transformarDatosTabla) {
    datos = data ? transformarDatosTabla(data,t) : [];
  }

  return { isLoading: false, [key]: datos, refetch, registroExitoso: status=='success' };
};

export { useFetchId };
