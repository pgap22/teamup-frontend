import { useToggle } from "@uidotdev/usehooks"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { aceptarPartidoMaestro, cancelarPartidoMaestro, colocarAsistenciaMaestro, obtenerUnPartido } from "src/api/partidos"
import EquipoCard from "src/components/estudiante/EquipoCard/EquipoCard"
import InfoCampo from "src/components/estudiante/InfoCampo"
import Button from "src/components/form/Button"
import MaestroLayout from "src/components/layout/MaestroLayout"
import Caja from "src/components/ui/Cajas/Caja"
import { useModal } from "src/hooks/useModal"

const Solicitud = () => {
    const [partido, setPartido] = useState({});
    const [partidoAceptado, setPartidoAceptado] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const [ModalAsistencia, modalAsistecia] = useModal();

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

    const cuidarPartido = async () => {
        try {
            await aceptarPartidoMaestro(id);
            setPartidoAceptado(true);
        } catch (error) {
            console.log(error)
        }
    }

    const tomarAsistencia = async()=>{
        try {
            await colocarAsistenciaMaestro(id);
            setPartidoAceptado(true);
            modalAsistecia.toggleModal(false);
        } catch (error) {
            console.log(error)
        }
    }
    const cancelarPartidoClick = async()=>{
        try {
            await cancelarPartidoMaestro(id);
            setPartidoAceptado(true);
            modalAsistecia.toggleModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    if (!partido.id) return <p>Cargando...</p>

    if (partidoAceptado) return <MensajeExito />

    return (
        <MaestroLayout titulo={"Solicitud N°" + partido.id}>
            <Caja titulo={"Datos Generales"}>
                <div className=" space-y-4">
                    <InfoCampo title={"Zona De Juego"} value={!partido.ZonaDejuego ? 'Pendiente' : partido.ZonaDejuego.nombre} />
                    <InfoCampo title={"Deporte"} value={partido.deporte.nombre} />
                    <InfoCampo title={"Maestro Encargado"} value={!partido.usuarioMaestro ? 'Pendiente' : partido.usuarioMaestro.nombre} />
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
                            partido.estado.fase == 2 && <Button onClick={cuidarPartido} className={"py-4 md:text-xl"} customBg={"#0F62FE"}>Cuidar Partido</Button>
                        }
                        {
                            partido.estado.fase == 4 && <Button onClick={() => modalAsistecia.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#7E7E7E"}>Tomar Asistencia</Button>
                        }
                    </div>
                </Caja>
            </div>

            <ModalAsistencia desktopTitle="Tomar Asistencia" {...modalAsistecia}>
                <div className="p-4">
                    <div className="space-y-2">
                        <p>Haz click para tomar la asistencia del equipo</p>             
                        <Button onClick={tomarAsistencia}>Tomar Asistencia</Button>
                    </div>
                   
                    <div className="mt-6 space-y-2">
                        <p>Si no se presenta un equipo puedes cancelar el partido</p>
                        <Button onClick={cancelarPartidoClick} customBg={"#7E7E7E"}>Cancelar Partido</Button>    
                    </div>
                </div>
            </ModalAsistencia>
        </MaestroLayout>
    )
}


const MensajeExito = () => {
    return (
        <MaestroLayout titulo={"Solicitud Aceptada"}>
            <Caja titulo={"Solicitud aceptada"}>
                <p>Tu cuidaras este partido !</p>

                <Link to={"/maestro"}>Volver al inicio</Link>
            </Caja>
        </MaestroLayout>
    )
}

export default Solicitud