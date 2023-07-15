import { useQuery } from "react-query";

const useFetch = (key, obtenerItems, transformarDatosTabla) => {
  const { data, isLoading, error } = useQuery(
    key,
    obtenerItems
  );

  if (isLoading) {
    return { isLoading: true, key: [] };
  }

  if (error) {
    return { isLoading: false, error, key: [] };
  }

  let datos = data.data;

  if(transformarDatosTabla){
     datos = data ? transformarDatosTabla(data) : []
  }

  return { isLoading: false, [key]: datos };
};

export {useFetch}