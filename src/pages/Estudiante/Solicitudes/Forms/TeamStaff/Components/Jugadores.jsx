import { BsSquareFill } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

import { motion } from "framer-motion";

import { stateMiembrosValues } from "../helper";

export const Jugadores = ({ jugadores, handleClick }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-h-96">
      {jugadores?.map((jugador, i) => (
        <JugadorItem key={i} jugador={jugador} handleClick={handleClick} />
      ))}
    </div>
  );
};

const JugadorItem = ({ jugador, handleClick }) => {
  const { id, nombre, rango, estado, jugadorYaUsado } = jugador;
  const { titular, reserva } = stateMiembrosValues;
  let color = "#A1A1A1";

  if (estado === titular) {
    color = "#0400DF";
  }
  if (estado === reserva) {
    color = "#04902B";
  }

  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.5 };
  return (
    <div className="w-full flex gap-2 p-3 border border-[#D8D8D8] rounded-md">
      <motion.div
        key={estado}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
      >
        {jugadorYaUsado ? (
          <AiOutlineCloseSquare className="cursor-pointer" size={30} />
        ) : (
          <BsSquareFill
            size={25}
            color={color}
            onClick={handleClick(id)}
            className="cursor-pointer"
          />
        )}
      </motion.div>
      <p className="truncate text-[#565656] text-lg font-bold">
        {nombre} {rango === "lider" && "(Tu)"}
      </p>
    </div>
  );
};
