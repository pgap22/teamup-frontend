import { useQuery } from "react-query";

const useFetchId = (id, obtenerItem, key, transformarDatosTabla) => {
  const { data, isLoading, error } = useQuery([key, id], () => obtenerItem(id) );

  if (isLoading) {
    return { isLoading: true, [key]: {} };
  }

  if (error) {
    return { isLoading: false, error, [key]: {} };
  }

  let datos = data.data;

  if(transformarDatosTabla){
     datos = data ? transformarDatosTabla(data) : []
  }


  return { isLoading: false, [key]: datos };
};

export { useFetchId };
