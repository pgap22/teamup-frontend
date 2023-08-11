import { useFetch } from "src/hooks/useFetch";
import { useEffect, useState } from "react";

import { equiposRivalesUsuario } from "src/api";

import EquiposContainer from "../../Components/Equipos";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";

const OponnentForm = () => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();

  const { id_equipo_visitante } = currentFormState.values;
  const defaultValueForm = id_equipo_visitante ? id_equipo_visitante : null;

  const [selectedEquipo, setSelectedEquipo] = useState(defaultValueForm);

  useEffect(() => {
    const funct = () => {
      const formStateCopy = { ...currentFormState };

      if (selectedEquipo) {
        formStateCopy.valid = true;
        formStateCopy.values.id_equipo_visitante = selectedEquipo;
        setForm({ ...form, [currentFormName]: { ...formStateCopy } });
        return;
      }

      formStateCopy.valid = null;
      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
    };
    funct();
  }, [selectedEquipo]);

  const { equiposRivales, isLoading } = useFetch(
    "equiposRivales",
    equiposRivalesUsuario
  );

  if (isLoading) return <p>Cargando . . .</p>;

  const handleClick = (value) => {
    setSelectedEquipo(value === selectedEquipo ? null : value);
  };

  return (
    <EquiposContainer
      handleClickItem={handleClick}
      setSelectedEquipo={setSelectedEquipo}
      selectedEquipo={selectedEquipo}
      equipos={equiposRivales}
    />
  );
};

export default OponnentForm;
