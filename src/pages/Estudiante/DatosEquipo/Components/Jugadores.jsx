import { BiUserMinus } from "react-icons/bi";

import { useSession } from "src/hooks/useSession";

const JugadorItem = ({ jugador, id_lider }) => {
  const { nombre, id, rango } = jugador;
  const { usuario } = useSession();

  return (
    <div className=" min-h-[60px] justify-center items-start min-w-[260px] w-[300px] py-3 px-2 border border-[#D8D8D8] rounded-md flex flex-col gap-1">
      <p className="truncate font-bold text-[#565656]">
        {nombre}
        {nombre === usuario.nombre && " (Tu)"}
      </p>

      {id === id_lider && (
        <div className="self-center px-10 py-1 font-semibold bg-[#43D351] text-white rounded-full text-sm">
          Lider
        </div>
      )}

      {id_lider === usuario.id && (
        <div className="flex gap-2 items-center ">
          {rango !== "lider" && (
            <button className="px-5 py-2 font-semibold bg-[#43D351] text-white rounded-full text-sm">
              Hacer lider
            </button>
          )}

          {rango !== "lider" && (
            <button className="p-2  font-semibold bg-[#EF8989] text-white rounded-full">
              <BiUserMinus size={15} color="#630000" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const Jugadores = ({ jugadores, id_lider }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-[#828282] text-4xl font-bold">Jugadores</h1>
      {!jugadores.length ? (
        <p>
          Actualmente no hay jugadores en tu equipo acuerdate que puedes
          invintar personas a tu equipo
        </p>
      ) : (
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit,320px)" }}
        >
          {jugadores.map((jugador) => (
            <JugadorItem
              id_lider={id_lider}
              key={jugador.id}
              jugador={jugador}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jugadores;
