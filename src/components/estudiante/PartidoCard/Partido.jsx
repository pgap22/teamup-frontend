import { GiTennisCourt } from "react-icons/gi";
import { Link } from "react-router-dom";
import Button from "src/components/form/Button";
import EstadoPartido from "./EstadoPartido";
import { fechaNormal } from "src/helper";

export default function Partido({ url = "1", partido = {} }) {
  const hayZonaJuego = partido.id && !!partido.ZonaDejuego;
  const imagenZonaJuego = hayZonaJuego
    ? new URL(
      import.meta.env.VITE_URL + partido.ZonaDejuego.imagenes[0].imagen_url
    ).toString()
    : "";

  return (
    <div className="border shadow-md p-4 rounded-lg">
      <div
        style={
          hayZonaJuego ? { backgroundImage: `url('${imagenZonaJuego}')` } : {}
        }
        className="bg-[#D9D9D9] bg-cover bg-center min-h-[100px] flex justify-center items-center rounded-lg"
      >
        {!hayZonaJuego && (
          <GiTennisCourt size={52} strokeWidth={4} color="#8C8C8C" />
        )}
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <div>
          <h2>
            <span className="font-bold">Deporte:</span>{" "}
            {partido.deporte.nombre}
          </h2>
          <p className="mt-1">
            <span className="font-bold">Fecha: </span>
            {fechaNormal(partido.fecha)}
          </p>
        </div>

        <EstadoPartido titulo={partido.estado.nombre} />

        <div>
          <p title={partido.equipo_local.nombre} className="max-w-[25ch] grid-cols-[max-content_1fr] gap-2 flex font-bold truncate">
           <span className="font-bold">Equipo Local:</span> {partido.equipo_local.nombre}
          </p>
          <p title={partido.equipo_visitante.nombre} className="max-w-[25ch] grid grid-cols-[max-content_1fr] gap-2 font-bold truncate">
          <span className="font-bold">Equipo Visitante:</span> {partido.equipo_visitante.nombre}
          </p>
        </div>

        <Link to={url + (partido.id ? partido.id : "")}>
          <Button>Ver mas informacion</Button>
        </Link>
      </div>
    </div>
  );
}
