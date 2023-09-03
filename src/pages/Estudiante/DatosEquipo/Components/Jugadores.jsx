import { BiUserMinus } from "react-icons/bi";
import { useModal } from "src/store/useModal";
import { useSession } from "src/hooks/useSession";
import { datosJugador } from "src/store/datos_jugador";
import { useTranlate } from "src/hooks/useTranslation";

const JugadorItem = ({ jugador, id_lider, idEquipo }) => {
  const { toggleModal } = useModal();
  const { toggleIdEquipo, toggleIdUsuarios, toggleNombre } = datosJugador();
  const { nombre, id, rango } = jugador;
  const { usuario } = useSession();
  const { t } = useTranlate();

  const setDatosJugador = () => {
    toggleIdEquipo(idEquipo);
    toggleIdUsuarios(id);
    toggleNombre(nombre);
  };

  return (
    <div className="min-h-[60px] justify-center max-w-xs py-3 px-2 border border-[#D8D8D8] rounded-md flex flex-col gap-1">
      <p
        title={nombre + (nombre === usuario.nombre ? t("tu") : "")}
        className="truncate font-bold text-[#565656]"
      >
        {nombre}
        {nombre === usuario.nombre && t("tu")}
      </p>

      {id === id_lider && (
        <div className="self-center px-10 py-1 font-semibold bg-[#43D351] text-white rounded-full text-sm">
          {t("lider")}
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
              {t("hacerLider")}
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
  );
};

const Jugadores = ({ jugadores, id_lider, idEquipo }) => {
  const { t } = useTranlate();

  return (
    <>
      <div className="flex flex-col items-center w-full gap-5 md:items-start">
        <h1 className="text-[#828282] text-4xl font-bold">{t("jugadores")}</h1>
        {jugadores.length && (
          <div
            className="grid justify-center w-full gap-4 overflow-y-auto max-h-[200px] md:justify-start"
            style={{
              gridTemplateColumns: "repeat(auto-fit,224px)",
            }}
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
