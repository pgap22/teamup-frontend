import { BiUserMinus } from "react-icons/bi";

import { useModal } from "src/store/useModal";
import { useSession } from "src/hooks/useSession";

import { datosJugador } from "src/store/datos_jugador";

const JugadorItem = ({ jugador, id_lider, idEquipo }) => {
  const { toggleModal } = useModal();

  const { toggleIdEquipo, toggleIdUsuarios, toggleNombre } = datosJugador();

  const { nombre, id, rango } = jugador;
  const { usuario } = useSession();

  const setDatosJugador = () => {
    toggleIdEquipo(idEquipo);
    toggleIdUsuarios(id);
    toggleNombre(nombre);
  };

  return (
    <>
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
          <div className="flex items-center gap-2 ">
            {rango !== "lider" && (
              <button
                onClick={() => {
                  setDatosJugador();
                  toggleModal("HacerLider");
                }}
                className="px-5 py-2 font-semibold bg-[#43D351] text-white rounded-full text-sm"
              >
                Hacer lider
              </button>
            )}

            {rango !== "lider" && (
              <button
                onClick={() => {
                  setDatosJugador();
                  toggleModal("EliminarMiembroModal");
                }}
                className="p-2  font-semibold bg-[#EF8989] text-white rounded-full"
              >
                <BiUserMinus size={15} color="#630000" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const Jugadores = ({ jugadores, id_lider, idEquipo }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-5">
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
                idEquipo={idEquipo}
                id_lider={id_lider}
                key={jugador.id}
                jugador={jugador}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Jugadores;
