import { BsCircleFill } from "react-icons/bs";
import { jugadoresSeleccionados } from "src/helper/transformarDatos";
import { motion } from "framer-motion";

import { stateMiembrosValues } from "../helper";
import { useTranlate } from "src/hooks/useTranslation";

const HeadLines = ({ headLinesPlayers, noTitulares }) => {
  const { t } = useTranlate();

  const arrayLength = headLinesPlayers?.length;
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <h1 className="text-lg font-bold">
        {t("titulares")} ({arrayLength}/{noTitulares})
      </h1>
      <div className="flex flex-col max-w-[300px] overflow-auto">
        {arrayLength !== 0 &&
          headLinesPlayers.map((player) => (
            <JugadorInfo key={player.id} jugador={player} esTitular />
          ))}

        {arrayLength === 0 && (
          <p className="text-sm text-[#A1A1A1]">{t("noTitulares")}</p>
        )}
      </div>
    </div>
  );
};

const Reservers = ({ reservePlayers, maxReservas }) => {
  const arrayLength = reservePlayers.length;
  const { t } = useTranlate();

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <h1 className="text-lg font-bold">
        {t("reserva")} ({arrayLength}/{maxReservas})
      </h1>
      <div className="flex flex-col w-full overflow-auto">
        {arrayLength !== 0 &&
          reservePlayers.map((player) => (
            <JugadorInfo key={player.id} jugador={player} esTitular={false} />
          ))}

        {arrayLength === 0 && (
          <p className="text-sm text-[#A1A1A1]">{t("noReserva")}</p>
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
      <div className="flex items-center w-full gap-3 ">
        <BsCircleFill size={20} color={colorCircle} />
        <p className={`text-base font-bold ${stylesJugador}`}>{nombre}</p>
      </div>
    </motion.div>
  );
};

export default Indicadores;
