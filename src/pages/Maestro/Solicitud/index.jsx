import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import { aceptarPartidoMaestro, cancelarPartido, colocarAsistencia, enviarResultadosPartido, obtenerUnPartido } from "src/api/partidos"
import EquipoCard from "src/components/estudiante/EquipoCard/EquipoCard"
import EquipoCardResultado from "src/components/estudiante/EquipoCard/EquipoCardResultado"
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
    const [ModalResultado, modalResultado] = useModal();

    const { register, handleSubmit } = useForm();

    const enviarResultadosSubmit = async (datos) => {
        try {
            await enviarResultadosPartido(id, datos);
            setPartidoAceptado(true)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        (async () => {
            try {
                const { data } = await obtenerUnPartido(id);
                setPartido(data)
            } catch (error) {
                navigate("/maestro")
            }
        })()
    }, [])

    const cuidarPartido = async () => {
        try {
            await aceptarPartidoMaestro(id);
            setPartidoAceptado({
                titulo: "Solicitud Cuidar",
                subtitulo: "Solicitud Aceptada",
                descripcion: "Ahora tu cuidaras este partido"
            });
        } catch (error) {
            console.log(error)
        }
    }

    const tomarAsistencia = async () => {
        try {
            await colocarAsistencia(id);
            setPartidoAceptado({
                titulo: "Asistencia Tomada",
                subtitulo: "Asistencia Tomada",
                descripcion: "La asistencia de este partido fue exitosa !"
            });
            modalAsistecia.toggleModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    const cancelarPartidoClick = async () => {
        try {
            await cancelarPartido(id);
            setPartidoAceptado({
                titulo: "Solicitud Cancelada",
                subtitulo: "Solicitud Cancelada",
                descripcion: "Haz cancelado esta solicitud"
            }); modalAsistecia.toggleModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    if (!partido.id) return <p>Cargando...</p>

    if (partidoAceptado) return <MensajeExito partidoAceptado={partidoAceptado} />

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
                        {
                            partido.estado.fase == 5 && <Button onClick={() => modalResultado.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#cfb93d"}>Enviar Resultado</Button>
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

            <ModalResultado desktopTitle="Resultados" {...modalResultado}>
                <form onSubmit={handleSubmit(enviarResultadosSubmit)} className="p-4 space-y-2">
                    <p>Envia aqui los resultados del partido !</p>
                    <div className="space-y-2">
                        <EquipoCardResultado register={register("resultado_local", { required: true, valueAsNumber: true })} equipo={partido.equipo_local} />
                        <EquipoCardResultado register={register("resultado_visitante", { required: true, valueAsNumber: true })} equipo={partido.equipo_visitante} />
                    </div>
                    <Button>Enviar Resultado !</Button>
                </form>
            </ModalResultado>
        </MaestroLayout>
    )
}


const MensajeExito = ({ partidoAceptado }) => {
    return (
        <MaestroLayout titulo={partidoAceptado.titulo}>
            <Caja titulo={partidoAceptado.subtitulo}>
                <p>{partidoAceptado.descripcion}</p>

                <Link to={"/maestro"}>Volver al inicio</Link>
            </Caja>
        </MaestroLayout>
    )
}

export default Solicitud