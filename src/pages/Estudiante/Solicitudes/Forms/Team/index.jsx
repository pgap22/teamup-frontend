import { useFetch } from "src/hooks/useFetch";
import { useEffect, useState } from "react";

import { equiposCreados } from "src/api";

import EquiposContainer from "../../Components/Equipos";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";

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

      if (selectedEquipo) {
        formStateCopy.valid = true;
        formStateCopy.values.id_equipo_local = selectedEquipo;
        setForm({ ...form, [currentFormName]: { ...formStateCopy } });
        return;
      }

      formStateCopy.valid = null;
      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
    };
    funct();
  }, [selectedEquipo]);
  if (isLoading) return <p>Cargando . . .</p>;

  const handleClick = (value) => {
    const formStateCopy = { ...currentFormState };
    formStateCopy.previousValues.id_equipo_local = selectedEquipo;
    setSelectedEquipo(value === selectedEquipo ? null : value);
    setForm({ ...form, [currentFormName]: { ...formStateCopy } });
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
