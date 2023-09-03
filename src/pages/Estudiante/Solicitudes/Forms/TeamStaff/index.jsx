import { useEffect, useRef, useState } from "react";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";

import { Jugadores } from "./Components/Jugadores";
import { useFetchId } from "src/hooks/useFetchId";

import { obtenerUnDeporte, obtenerUnEquipo } from "src/api";
import {
  jugadoresSeleccionados,
  miembrosEquipo,
} from "src/helper/transformarDatos";
import Indicadores from "./Components/Indicadores";

import { stateMiembrosValues } from "./helper";
import { useFetchClick } from "src/hooks/useFetchClick";
import Loader from "src/components/ui/Loader";

const miembrosStateData = ({ miembros }) => {
  return miembros.map((miembro) => ({
    ...miembro,
    estado: null,
  }));
};

const TeamStaffForm = () => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();
  const deporte = form.Deportes.values.deporte[0];

  const { id_equipo_local } = form.EquipoLocal.values;
  const { previous_id_equipo } = form.EquipoLocal.values;

  const { jugadores: miembrosState } = currentFormState.values;

  const { limiteJugadores, limiteJugadoresCambio } = deporte;

  const [selectedJugadores, setSelectedJugadores] = useState([]);

  const { isLoading, equipo_form, registroExitoso } = useFetchId(id_equipo_local, obtenerUnEquipo, "equipo_form")

  useEffect(() => {
    if (miembrosState && previous_id_equipo === id_equipo_local) {
      //Hay que ver si los titulares y reservas que hay coinciden con los limites si no chao
      const { headLinesPlayers, reservePlayers } = jugadoresSeleccionados({
        stateMiembrosValues,
        data: miembrosState,
      });

      const NoTitulares = headLinesPlayers.length;
      const NoReservas = reservePlayers.length;

      if (
        NoTitulares <= limiteJugadores &&
        NoReservas <= limiteJugadoresCambio
      ) {
        setSelectedJugadores([...miembrosState]);
        return;
      }
    }

    if (registroExitoso) {
      const { jugadores } = miembrosEquipo({ data: equipo_form });
      setSelectedJugadores(miembrosStateData({ miembros: jugadores }));
    }

  }, [registroExitoso]);

  useEffect(() => {
    if (!deporte || !selectedJugadores) return;

    const { headLinesPlayers } = jugadoresSeleccionados({
      stateMiembrosValues,
      data: selectedJugadores,
    });
    const NoTitulares = headLinesPlayers.length;
    const formStateCopy = { ...currentFormState };

    if (NoTitulares === limiteJugadores) {
      formStateCopy.valid = true;
      formStateCopy.values.jugadores = [...selectedJugadores];
      formStateCopy.values.id_equipo_actual = id_equipo_local;
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
    <div className="flex flex-col gap-10 w-full max-w-7xl  justify-start lg:grid lg:grid-cols-2 ">
      {
        isLoading
          ? <Loader color="blue" />
          : <Jugadores handleClick={handleClick} jugadores={selectedJugadores} />

      }
      <Indicadores selectedJugadores={selectedJugadores} deporte={deporte} />
    </div>
  );
};

export default TeamStaffForm;
