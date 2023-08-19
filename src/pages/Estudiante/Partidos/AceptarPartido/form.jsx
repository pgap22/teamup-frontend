import { useEffect, useState } from "react";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";

import { Jugadores } from "../../Solicitudes/Forms/TeamStaff/Components/Jugadores";
import Indicadores from "../../Solicitudes/Forms/TeamStaff/Components/Indicadores";

import { jugadoresSeleccionados } from "src/helper/transformarDatos";

import { stateMiembrosValues } from "../../Solicitudes/Forms/TeamStaff/helper";

const TeamStaffForm = ({ deporte, miembros }) => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();

  const { limiteJugadores, limiteJugadoresCambio } = deporte;

  const [selectedJugadores, setSelectedJugadores] = useState(miembros);

  useEffect(() => {
    const { headLinesPlayers } = jugadoresSeleccionados({
      stateMiembrosValues,
      data: selectedJugadores,
    });
    const NoTitulares = headLinesPlayers.length;
    const formStateCopy = { ...currentFormState };

    if (NoTitulares === limiteJugadores) {
      formStateCopy.valid = true;
      formStateCopy.values.jugadores = [...selectedJugadores];
      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
      return;
    }

    formStateCopy.valid = false;
    setForm({ ...form, [currentFormName]: { ...formStateCopy } });
  }, [selectedJugadores]);

  const handleClick = (id) => {
    return () => {
      const { headLinesPlayers, reservePlayers } = jugadoresSeleccionados({
        stateMiembrosValues,
        data: selectedJugadores,
      });

      const NoTitulares = headLinesPlayers.length;
      const NoReservas = reservePlayers.length;

      const playerObject = selectedJugadores.filter(
        (jugador) => jugador.id === id
      )[0];

      const { titular, reserva } = stateMiembrosValues;

      const { estado } = playerObject;
      const objCopy = { ...playerObject };

      if (estado === titular) {
        objCopy.estado = reserva;
        if (limiteJugadoresCambio === NoReservas) {
          objCopy.estado = null;
        }
      }

      if (estado === reserva) {
        objCopy.estado = null;
      }

      if (!estado) {
        objCopy.estado = titular;
        if (NoTitulares === limiteJugadores) {
          objCopy.estado = reserva;
        }
        if (
          limiteJugadoresCambio === NoReservas &&
          NoTitulares === limiteJugadores
        ) {
          objCopy.estado = null;
        }
      }

      const selectedPlayersMapped = selectedJugadores.map((jugador) =>
        jugador.id === id ? objCopy : jugador
      );

      setSelectedJugadores(selectedPlayersMapped);
    };
  };

  return (
    <div className="flex gap-10 h-[500px] w-full px-16 justify-start md:flex-row flex-col">
      <Jugadores handleClick={handleClick} jugadores={selectedJugadores} />
      <Indicadores selectedJugadores={selectedJugadores} deporte={deporte} />
    </div>
  );
};

export default TeamStaffForm;
