import { BiUserMinus } from "react-icons/bi";

const JugadorItem = ({ jugador }) => {
  return (
    <div className=" min-w-[260px] w-[300px] py-3 px-2 border border-[#D8D8D8] rounded-md">
      <p className="truncate">Juanito Juanito Juanito Juanito (Tu)</p>
      <div className="flex gap-2 items-center ">
        <button className="px-5 py-2 font-semibold bg-[#43D351] text-white rounded-full text-sm">
          Hacer lider
        </button>

        <button className="p-2  font-semibold bg-[#EF8989] text-white rounded-full">
          <BiUserMinus size={15} color="#630000" />
        </button>
      </div>
    </div>
  );
};

const Jugadores = ({ jugadores }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-[#828282] text-4xl font-bold">Jugadores</h1>
      {!jugadores.length ? (
        <p>
          Actualmente no hay jugadores en tu equipo, puedes invitar a personas
          haciendo click en este
          <span className=" text-primary font-bold"> enlace </span>
        </p>
      ) : (
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit,320px)" }}
        >
          {jugadores.map((jugador) => (
            <JugadorItem jugador={jugador} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jugadores;
