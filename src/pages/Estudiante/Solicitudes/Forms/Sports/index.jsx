import EstudianteFormLayout from "src/components/estudiante/form";
import SportItem from "./SportItem";

import { obtenerDeportes } from "src/api";
import { useFetch } from "src/hooks/useFetch";
import { useState } from "react";

const SportsForm = () => {
  const [sport, toogleSport] = useState(null);
  const { isLoading, deportes } = useFetch("deportes", obtenerDeportes);
  if (isLoading) return <p>Cargando</p>;

  const handleClick = (value) => {
    toogleSport(value === sport ? null : value);
  };

  return (
    <EstudianteFormLayout
      title={"¿Que deporte vamos a jugar hoy?"}
      handleClickCancelar={() => {}}
      handleClickContinuar={() => {}}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {deportes?.map((deporte) => {
          return (
            <SportItem
              handleClickSport={handleClick}
              toogleSport={toogleSport}
              isSelected={deporte.id === sport}
              deporte={deporte}
              key={deporte.id}
            />
          );
        })}
      </div>
    </EstudianteFormLayout>
  );
};

export default SportsForm;
