import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { aceptarPartidoMaestro, obtenerUnPartido } from "src/api/partidos"
import EquipoCard from "src/components/estudiante/EquipoCard/EquipoCard"
import InfoCampo from "src/components/estudiante/InfoCampo"
import Button from "src/components/form/Button"
import MaestroLayout from "src/components/layout/MaestroLayout"
import Caja from "src/components/ui/Cajas/Caja"

const Solicitud = () => {
    const [partido, setPartido] = useState({});
    const [partidoAceptado, setPartidoAceptado] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await obtenerUnPartido(id);
                setPartido(data)
            } catch (error) {
                navigate("/maestros")
            }
        })()
    }, [])

    const cuidarPartido = async() => {
        try {
            const partidoAceptado = await aceptarPartidoMaestro(id);
            console.log(partidoAceptado);
        } catch (error) {
            console.log(error)
        }
    }

    if (!partido.id) return <p>Cargando...</p>


    return (
        <MaestroLayout titulo={"Solicitud N°1"}>
            <Caja titulo={"Datos Generales"}>
                <div className=" space-y-4">
                    <InfoCampo title={"Zona De Juego"} value={partido.ZonaDejuego.nombre} />
                    <InfoCampo title={"Deporte"} value={partido.deporte.nombre} />
                    <InfoCampo title={"Maestro Encargado"} value={!partido.usuarioMaestro ? 'Pendiente' : partido.usuarioMaestro.nombre} />
                    <InfoCampo title={"Zona De Juego"} value={"Cancha Techada"} />
                </div>
            </Caja>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 max-w-4xl">
                <Caja titulo={"Equipos"}>
                    <div className="md:max-w-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                        <Link to={"/maestro/equipo/" + partido.equipo_local.nombre}>
                            <EquipoCard equipo={partido.equipo_local} />
                        </Link>
                        <Link to={"/maestro/equipo/" + partido.equipo_visitante.nombre}>
                            <EquipoCard equipo={partido.equipo_visitante} />
                        </Link>
                    </div>
                </Caja>
                <Caja className={"flex flex-col gap-2"} titulo={"Acciones"}>
                    <div className="h-full justify-center flex flex-col">
                        {
                            partido.estado.id == 2 && <Button onClick={cuidarPartido} className={"py-4 md:text-xl"} customBg={"#0F62FE"}>Cuidar Partido</Button>
                        }
                        {/* <Button className={"py-4 md:text-xl"} customBg={"#7E7E7E"}>Tomar Asistencia</Button> */}
                    </div>
                </Caja>
            </div>
        </MaestroLayout>
    )
}

export default Solicitud