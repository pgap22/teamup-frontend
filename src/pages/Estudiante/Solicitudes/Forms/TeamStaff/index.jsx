import { useState } from "react";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";
import EstudianteFormLayout from "src/components/estudiante/form";
import { Jugadores } from "./Components/Jugadores";
import { useFetchId } from "src/hooks/useFetchId";
import { obtenerMiembros } from "src/api/equipos";
import { obtenerUnEquipo } from "src/api";
import { miembrosEquipo } from "src/helper/transformarDatos";
import Indicadores from "./Components/Indicadores";

const TeamStaffForm = () => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();

  const { equipo: { jugadores: miembros }, isLoading } = useFetchId(1, obtenerUnEquipo, "equipo", miembrosEquipo)
  const { jugadores } = currentFormState.values;
  const defaultValueForm = jugadores ? jugadores : null;

  const [selectedJugadores, setSelectedJugadores] = useState(defaultValueForm);

  return (
    <div className="flex gap-10 h-[500px] w-full px-16 justify-start ">
      <Jugadores jugadores={miembros} />
      <Indicadores />
    </div>
  );
};

export default TeamStaffForm;
