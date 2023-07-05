import { useQuery } from "react-query";
import { obtenerNivelesAcademicos } from "../../../api";

const useNivelesAcademicos = () => {
  const { data, isLoading, error } = useQuery(
    "niveles_academicos",
    obtenerNivelesAcademicos
  );

  if (isLoading) {
    return { isLoading: true, nivelesAcademicos: [] };
  }

  if (error) {
    return { isLoading: false, error, nivelesAcademicos: [] };
  }

  const nivelesAcademicos = data?.data.map((nivel) => ({
    value: nivel.id,
    label: nivel.nivel,
  }));

  return { isLoading: false, nivelesAcademicos };
};

export {useNivelesAcademicos}