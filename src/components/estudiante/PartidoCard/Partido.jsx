import { GiTennisCourt } from "react-icons/gi"
import { Link } from "react-router-dom";
import Button from "src/components/form/Button";
import EstadoPartido from "./EstadoPartido";

export default function Partido({ url = "1", partido = {}}) {
    
    const hayZonaJuego = partido.id && !!partido.ZonaDejuego.id;
    const imagenZonaJuego = hayZonaJuego ? new URL(import.meta.env.VITE_URL + partido.ZonaDejuego.imagenes[0].imagen_url).toString() : '';

    return (
        <div className="border shadow-md p-4 rounded-lg">

            <div style={hayZonaJuego && { backgroundImage: `url(${imagenZonaJuego})` }} className="bg-[#D9D9D9] bg-cover bg-center min-h-[100px] flex justify-center items-center rounded-lg">
                {!hayZonaJuego && <GiTennisCourt size={52} strokeWidth={4} color="#8C8C8C" />}
            </div>

            <div className="flex flex-col gap-4 mt-2">
                <h2><span className="font-bold">Deporte:</span> {hayZonaJuego && partido.deporte.nombre}</h2>

                <EstadoPartido titulo={hayZonaJuego && partido.estado.nombre} />

                <div>
                    <p className="max-w-[25ch] font-bold overflow-auto">{hayZonaJuego && partido.equipo_local.nombre}</p>
                    <p className="max-w-[25ch] font-bold overflow-auto">{hayZonaJuego && partido.equipo_visitante.nombre}</p>
                </div>

                <Link to={url + (partido.id ? partido.id: '')}>
                    <Button>Ver mas informacion</Button>
                </Link>
            </div>

        </div>
    )
}
