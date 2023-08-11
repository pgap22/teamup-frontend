import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { aceptarPartidoCoordinacion, obtenerUnPartido, obtenerZonaJuegosPorPartido, posponerPartido, rechazarPartido } from "src/api/partidos"
import EquipoCard from "src/components/estudiante/EquipoCard/EquipoCard"
import InfoCampo from "src/components/estudiante/InfoCampo"
import EstadoPartido from "src/components/estudiante/PartidoCard/EstadoPartido"
import Button from "src/components/form/Button"
import Input from "src/components/form/Input"
import Select from "src/components/form/Select"
import CoordinacionLayout from "src/components/layout/CoordinacionLayout"
import Caja from "src/components/ui/Cajas/Caja"
import { zonaJuegosSelect } from "src/helper/transformarDatos"
import { useFetchId } from "src/hooks/useFetchId"
import { useModal } from "src/hooks/useModal"

const SolicitudesInformacion = () => {
    
    const { id } = useParams();
    const { isLoading, partido } = useFetchId(id, obtenerUnPartido, 'partido');
    const {isLoading: loadingZonaJuegos, zonaDeJuegos} = useFetchId(id, obtenerZonaJuegosPorPartido, 'zonaDeJuegos', zonaJuegosSelect);


    const [modificacion, setModificacion] = useState(false);

    const [ModalPosponer, modalPosponer] = useModal();
    const [ModalRechazar, modalRechzar] = useModal();
    const [ModalAceptar, modalAceptar] = useModal();


    const { register, handleSubmit } = useForm();
    const {setValue, handleSubmit: submitAceptar} = useForm();


    const aceptarPartidoSubmit = async(dato)=>{
        try {
            await aceptarPartidoCoordinacion(id, dato);
            modalAceptar.toggleModal(false);
            setModificacion(true);
        } catch (error) {
            console.log(error)
        }
    }

    const rechazarPartidoClick = async () => {
        try {
            await rechazarPartido(id);
            modalRechzar.toggleModal(false);
            setModificacion(true);
        } catch (error) {
            console.log(error)
        }
    }

    const posponerSubmit = async (data) => {
        try {
            const partidoPospueto = await posponerPartido(id, data)
            modalPosponer.toggleModal(false);
            setModificacion(true);
            console.log(partidoPospueto);
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) return <p>Cargando...</p>
    if (loadingZonaJuegos) return <p>Cargando...</p>

    if (modificacion) return <ModificacionMensaje />

    return (
        <CoordinacionLayout titulo={"Solicitud N°" + partido.id}>
            <Caja titulo={"Estado del partido"}>
                <EstadoPartido titulo={partido.estado.nombre} />
            </Caja>

            <Caja className={"mt-5"} titulo={"Datos Generales"}>
                <div className=" space-y-4">

                    <InfoCampo title={"Zona De Juego"} value={!partido.ZonaDejuego ? 'Pendiente' : partido.ZonaDejuego.nombre} />
                    <InfoCampo title={"Deporte"} value={partido.deporte.nombre} />
                    <InfoCampo title={"Maestro Encargado"} value={!partido.usuarioMaestro ? 'Pendiente' : partido.usuarioMaestro.nombre} />
                </div>
            </Caja>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 max-w-4xl">
                <Caja titulo={"Equipos"} className={"max-h-fit"}>
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
                    <div className="h-full flex flex-col gap-4">
                        {
                            partido.estado.fase == 3 ? (
                                <>
                                    <Button onClick={() => modalAceptar.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#04BB16"}>Aceptar Solicitud</Button>
                                    <Button onClick={() => modalPosponer.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#A0A0A0"}>Posponer Fecha</Button>
                                    <Button onClick={() => modalRechzar.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#DD3535"}>Rechazar Solicitud</Button>
                                </>
                            )
                                : <p>No hay acciones !</p>
                        }
                    </div>
                </Caja>
            </div>

            <ModalAceptar desktopTitle="Aceptar Solicitud" {...modalAceptar}>
                <form onSubmit={submitAceptar(aceptarPartidoSubmit)} className="p-4 space-y-4">
                    <p>Selecciona la cancha a prestar para este partido !d</p>
                    <Select 
                        setValue={setValue}
                        valueLabel="id_zona_juego"
                        label="Zona De Juego"
                        noAbsolute 
                        opciones={zonaDeJuegos} 
                        placeholder={"Selecciona Zona De Juego"} />

                    <Button>Aceptar Partido</Button>
                </form>
            </ModalAceptar>

            <ModalPosponer {...modalPosponer} desktopTitle="Posponer Fecha">
                <form onSubmit={handleSubmit(posponerSubmit)} className="p-4 space-y-4">
                    <Input register={{
                        ...register("fecha", { required: true }),
                        min: new Date().toJSON().split("T")[0]
                    }} label={"Seleccione una nueva fecha"} type="datetime-local" />
                    <Button>Posponer Partido</Button>
                </form>
            </ModalPosponer>

            <ModalRechazar {...modalRechzar} desktopTitle="Rechazar Solicitud">
                <div className="p-4 space-y-4">
                    <p>Deseas rechazar esta solicitud de partido</p>
                    <Button onClick={rechazarPartidoClick}>Rechazar Solictud</Button>
                </div>
            </ModalRechazar>


        </CoordinacionLayout>
    )
}

const ModificacionMensaje = () => {
    return (
        <CoordinacionLayout titulo={"Solicitud Modificada"}>
            <Caja titulo={"Solicitud Modificada"}>
                <p>La solicitud ha sido Modificada</p>
                <Link to={"/coordinacion/solicitudes"}>Haz click aca para regresar</Link>
            </Caja>
        </CoordinacionLayout>
    )
}

export default SolicitudesInformacion
