import SportItem from "./SportItem";

import { obtenerDeportes } from "src/api";
import { useFetch } from "src/hooks/useFetch";
import { useEffect, useState } from "react";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";

const SportsForm = () => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();
  const { id_deporte } = currentFormState.values;
  const defaultValueForm = id_deporte ? id_deporte : null;

  const [sport, toogleSport] = useState(defaultValueForm);
  const { isLoading, deportes } = useFetch("deportes", obtenerDeportes);

  useEffect(() => {
    const funct = () => {
      const formStateCopy = { ...currentFormState };

      if (sport) {
        formStateCopy.valid = true;
        formStateCopy.values.id_deporte = sport;
        formStateCopy.values.deporte = { ...deportes.filter((deporte) => deporte.id === sport) }
        setForm({ ...form, [currentFormName]: { ...formStateCopy } });
        return;
      }

      formStateCopy.valid = null;
      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
    };
    funct();
  }, [sport]);

  if (isLoading) return <p>Cargando</p>;

  const handleClick = (value) => {
    toogleSport(value === sport ? false : value);
  };

  return (
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
  );
};

export default SportsForm;
