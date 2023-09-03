import { useFetch } from "src/hooks/useFetch";
import { useEffect, useState } from "react";

import { equiposCreados } from "src/api";

import EquiposContainer from "../../Components/Equipos";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";
import { PageLoader } from "src/components/ui/PageLoader";
import Loader from "src/components/ui/Loader";

const TeamForm = () => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();

  const { id_equipo_local } = currentFormState.values;
  const defaultValueForm = id_equipo_local ? id_equipo_local : null;

  const [selectedEquipo, setSelectedEquipo] = useState(defaultValueForm);

  const { equipos, isLoading } = useFetch("equipos", equiposCreados);

  useEffect(() => {
    const funct = () => {
      const formStateCopy = { ...currentFormState };
      const id_equipo_plantilla = form["Plantilla"].values.id_equipo_actual;

      if (selectedEquipo) {
        formStateCopy.valid = true;
        formStateCopy.values.id_equipo_local = selectedEquipo;

        if (id_equipo_plantilla) {
          formStateCopy.values.previous_id_equipo = id_equipo_plantilla;
        }

        setForm({ ...form, [currentFormName]: { ...formStateCopy } });
        return;
      }

      formStateCopy.valid = null;
      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
    };
    funct();
  }, [selectedEquipo]);

  if (isLoading) return <Loader color="blue" />;

  const handleClick = (value) => {
    setSelectedEquipo(value === selectedEquipo ? null : value);
  };
  return (
    <EquiposContainer
      handleClickItem={handleClick}
      setSelectedEquipo={setSelectedEquipo}
      selectedEquipo={selectedEquipo}
      equipos={equipos}
    />
  );
};

export default TeamForm;
