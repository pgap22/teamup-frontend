import SportItem from "./SportItem";

import { obtenerDeportes } from "src/api";
import { useFetch } from "src/hooks/useFetch";
import { useEffect, useState } from "react";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { PageLoader } from "src/components/ui/PageLoader";
import Loader from "src/components/ui/Loader";

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

      if (sport && !isLoading) {
        formStateCopy.valid = true;
        formStateCopy.values.id_deporte = sport;
        formStateCopy.values.deporte = {
          ...deportes.filter((deporte) => deporte.id === sport),
        };
        setForm({ ...form, [currentFormName]: { ...formStateCopy } });
        return;
      }

      formStateCopy.valid = null;
      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
    };
    funct();
  }, [sport, isLoading]);

  if (isLoading) return <Loader  color="blue" />;

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
