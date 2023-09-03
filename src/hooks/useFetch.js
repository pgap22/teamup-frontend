import { useQuery } from "react-query";

const useFetch = (key, obtenerItems, transformarDatosTabla) => {
  const { data, isLoading, error } = useQuery(
    key,
    obtenerItems,
    {refetchOnWindowFocus: false, cacheTime: 0, retry: false}
  );

  if (isLoading) {
    return { isLoading: true, key: [], registroExitoso: false, };
  }

  if (error) {
    return { isLoading: false, error, key: [] , registroExitoso: false,};
  }

  let datos = data.data;

  if(transformarDatosTabla){
     datos = data ? transformarDatosTabla(data) : []
  }

  return { isLoading: false, [key]: datos, registroExitoso: true, error };
};

export {useFetch}