import { BsCircleFill } from "react-icons/bs";
import { jugadoresSeleccionados } from "src/helper/transformarDatos";
import { motion } from "framer-motion";

import { stateMiembrosValues } from "../helper";

const HeadLines = ({ headLinesPlayers, noTitulares }) => {
  const arrayLength = headLinesPlayers?.length;
  return (
    <div className="h-full w-full flex flex-col gap-2">
      <h1 className="text-lg font-bold">
        Titulares ({arrayLength}/{noTitulares})
      </h1>
      <div className="flex flex-col max-w-[300px] overflow-auto">
        {arrayLength !== 0 &&
          headLinesPlayers.map((player) => (
            <JugadorInfo key={player.id} jugador={player} esTitular />
          ))}

        {arrayLength === 0 && (
          <p className="text-sm text-[#A1A1A1]">
            No hay jugadores titulares acutalmente
          </p>
        )}
      </div>
    </div>
  );
};

const Reservers = ({ reservePlayers, maxReservas }) => {
  const arrayLength = reservePlayers.length;

  return (
    <div className="h-full w-full flex flex-col gap-2">
      <h1 className="text-lg font-bold">
        Reservas ({arrayLength}/{maxReservas})
      </h1>
      <div className="flex flex-col overflow-auto w-full">
        {arrayLength !== 0 &&
          reservePlayers.map((player) => (
            <JugadorInfo key={player.id} jugador={player} esTitular={false} />
          ))}

        {arrayLength === 0 && (
          <p className="text-sm text-[#A1A1A1]">
            No hay jugadores de reserva acutalmente
          </p>
        )}
      </div>
    </div>
  );
};

const Indicadores = ({ deporte, selectedJugadores }) => {
  const { limiteJugadores, limiteJugadoresCambio } = deporte;

  const { headLinesPlayers, reservePlayers } = jugadoresSeleccionados({
    data: selectedJugadores,
    stateMiembrosValues,
  });

  return (
    <div className="rounded-md w-full border border-[#D8D8D8] gap-10  grid grid-rows-2 py-5 px-8  items-start ">
      <HeadLines
        headLinesPlayers={headLinesPlayers}
        noTitulares={limiteJugadores}
      />
      <Reservers
        reservePlayers={reservePlayers}
        maxReservas={limiteJugadoresCambio}
      />
    </div>
  );
};

const JugadorInfo = ({ jugador, esTitular }) => {
  const { nombre, estado } = jugador;
  const stylesJugador = esTitular ? "text-primary" : "text-[#04902B]";
  const colorCircle = esTitular ? "#0000DB" : "#04902B";

  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.5 };
  return (
    <motion.div
      key={estado}
      initial={initialAnimation}
      animate={animateAnimation}
      exit={exitAnimation}
      transition={transitionProps}
    >
      <div className="flex gap-3 w-full items-center ">
        <BsCircleFill size={20} color={colorCircle} />
        <p className={`text-base font-bold ${stylesJugador}`}>{nombre}</p>
      </div>
    </motion.div>
  );
};

export default Indicadores;
