import { useQuery } from "react-query";

const useFetchClick = (key, obtenerItems, transformarDatosTabla) => {
  const {data, isLoading, error, refetch, status } = useQuery(key, obtenerItems, {
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    retryOnMount: false,
    cacheTime: 0,
});

  if (isLoading) {
    return { isLoading: true, key: [], registroExitoso: status=='success',refetch };
  }

  if (error) {
    return { isLoading: false, error, key: [], registroExitoso: status=='success',refetch };
  }

  let datos = data ? data.data : '';

  if (transformarDatosTabla) {
    datos = data ? transformarDatosTabla(data) : [];
  }

  return {refetch, isLoading, [key]: datos, registroExitoso: status=='success' , error };
};

export { useFetchClick };
