import { AxiosError } from "axios"
import { useEffect, useState } from "react"
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
import { AlertaError } from "src/components/ui/AlertaError"
import Caja from "src/components/ui/Cajas/Caja"
import Loader from "src/components/ui/Loader"
import { PageLoader } from "src/components/ui/PageLoader"
import Skeleton from "src/components/ui/Skeleton"
import { zonaJuegosSelect } from "src/helper/transformarDatos"
import { useFetchClick } from "src/hooks/useFetchClick"
import { useFetchId } from "src/hooks/useFetchId"
import { useModal } from "src/hooks/useModal"
import { useTranlate } from "src/hooks/useTranslation"

const SolicitudesInformacion = () => {

    const { id } = useParams();
    const {t} = useTranlate();
    const { isLoading, partido } = useFetchId(id, obtenerUnPartido, 'partido');
    const { isLoading: loadingZonaJuegos, zonaDeJuegos } = useFetchId(id, obtenerZonaJuegosPorPartido, 'zonaDeJuegos', zonaJuegosSelect);
    const { refetch: rechazarPartidoClick, registroExitoso, isLoading: cargandoRechazar } = useFetchClick("cancelarPartido", () => rechazarPartido(id));

    const [modificacion, setModificacion] = useState(false);

    const [ModalPosponer, modalPosponer] = useModal();
    const [ModalRechazar, modalRechzar] = useModal();
    const [ModalAceptar, modalAceptar] = useModal();


    const { register, handleSubmit, setError, formState: { errors, isSubmitting: cargandoPosponer } } = useForm();
    const { setValue, handleSubmit: submitAceptar, formState: { isSubmitting: cargandoAceptar } } = useForm();

    const aceptarPartidoSubmit = async (dato) => {
        try {
            await aceptarPartidoCoordinacion(id, dato);
            modalAceptar.toggleModal(false);
            setModificacion(true);
        } catch (error) {

        }
    }


    useEffect(() => {
        if (registroExitoso) {
            modalRechzar.toggleModal(false);
            setModificacion(true);
        }
    }, [registroExitoso])

    const posponerSubmit = async (data) => {
        try {
            const partidoPospueto = await posponerPartido(id, data)
            modalPosponer.toggleModal(false);
            setModificacion(true);
            console.log(partidoPospueto);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError("fecha", { type: 'custom', message: error.response.data.error });
            }
        }
    }

    if (isLoading || loadingZonaJuegos) return <PageLoader />

    if (modificacion) return <ModificacionMensaje />

    return (
        <CoordinacionLayout titulo={t("solicitudDetalle.title", {partido})}>
        <Caja titulo={t("solicitudDetalle.estadoPartido")}>
          <EstadoPartido titulo={partido.estado.nombre} />
        </Caja>
    
        <Caja className={"mt-5"} titulo={t("solicitudDetalle.datosGenerales")}>
          <div className=" space-y-4">
            <InfoCampo title={t("solicitudDetalle.zonaDeJuego")} value={!partido.ZonaDejuego ? t("solicitudDetalle.accionesSinAcciones") : partido.ZonaDejuego.nombre} />
            <InfoCampo title={t("solicitudDetalle.deporte")} value={partido.deporte.nombre} />
            <InfoCampo title={t("solicitudDetalle.maestroEncargado")} value={!partido.usuarioMaestro ? t("solicitudDetalle.accionesSinAcciones") : partido.usuarioMaestro.nombre} />
          </div>
        </Caja>
    
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 max-w-4xl">
          <Caja titulo={t("solicitudDetalle.equipos")} className={"max-h-fit"}>
            <div className="md:max-w-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <Link to={"/maestro/equipo/" + partido.equipo_local.nombre}>
                <EquipoCard equipo={partido.equipo_local} />
              </Link>
              <Link to={"/maestro/equipo/" + partido.equipo_visitante.nombre}>
                <EquipoCard equipo={partido.equipo_visitante} />
              </Link>
            </div>
          </Caja>
          <Caja className={"flex flex-col gap-2"} titulo={t("solicitudDetalle.acciones")}>
            <div className="h-full flex flex-col gap-4">
              {
                partido.estado.fase == 3 ? (
                  <>
                    <Button onClick={() => modalAceptar.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#04BB16"}>{t("solicitudDetalle.accionesAceptar")}</Button>
                    <Button onClick={() => modalPosponer.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#A0A0A0"}>{t("solicitudDetalle.accionesPosponer")}</Button>
                    <Button onClick={() => modalRechzar.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#DD3535"}>{t("solicitudDetalle.accionesRechazar")}</Button>
                  </>
                )
                  : <p>{t("solicitudDetalle.accionesSinAcciones")}</p>
              }
            </div>
          </Caja>
        </div>
    
        <ModalAceptar desktopTitle={t("solicitudDetalle.modalAceptarTitle")} {...modalAceptar}>
          <form onSubmit={submitAceptar(aceptarPartidoSubmit)} className="p-4 space-y-4">
            <p>{t("solicitudDetalle.modalAceptarDescription")}</p>
            <Select
              setValue={setValue}
              valueLabel="id_zona_juego"
              label={t("solicitudDetalle.modalAceptarZonaDeJuego")}
              noAbsolute
              opciones={zonaDeJuegos}
              placeholder={t("solicitudDetalle.modalAceptarPlaceholder")}
            />
            <Button disabled={cargandoAceptar}>
              <Skeleton fallback={<Loader />} loading={cargandoAceptar}>
                {t("solicitudDetalle.modalAceptarButton")}
              </Skeleton>
            </Button>
          </form>
        </ModalAceptar>
    
        <ModalPosponer {...modalPosponer} desktopTitle={t("solicitudDetalle.modalPosponerTitle")}>
          <form onSubmit={handleSubmit(posponerSubmit)} className="p-4 max-w-md space-y-4">
            <div className="space-y-2">
              {errors.fecha && <AlertaError message={errors.fecha.message} />}
              <p>{t("solicitudDetalle.modalPosponerDescription")}</p>
            </div>
            <Input register={{
              ...register("fecha", { required: { value: true, message: 'Ingresa una fecha' } }),
              min: new Date().toLocaleDateString("sv", { hour: 'numeric', minute: 'numeric' })
            }} label={t("solicitudDetalle.modalPosponerFecha")} type="datetime-local" />
            <Button disabled={cargandoPosponer}>
              <Skeleton fallback={<Loader />} loading={cargandoPosponer}>
                {t("solicitudDetalle.modalPosponerButton")}
              </Skeleton>
            </Button>
          </form>
        </ModalPosponer>
    
        <ModalRechazar {...modalRechzar} desktopTitle={t("solicitudDetalle.modalRechazarTitle")}>
          <div className="p-4 space-y-4">
            <p>{t("solicitudDetalle.modalRechazarDescription")}</p>
            <Button disabled={cargandoRechazar} onClick={rechazarPartidoClick}>
              <Skeleton loading={cargandoRechazar} fallback={<Loader />}>
                {t("solicitudDetalle.modalRechazarButton")}
              </Skeleton>
            </Button>
          </div>
        </ModalRechazar>
      </CoordinacionLayout>
    )
}

const ModificacionMensaje = () => {
    const {t} = useTranlate();
    return (
        <CoordinacionLayout titulo={t("solicitudDetalle.modificacionMensajeTitle")}>
            <Caja titulo={t("solicitudDetalle.modificacionMensajeDescription")}>
                <p>{t("solicitudDetalle.modificacionMensajeDescription")}</p>
                <Link to={"/coordinacion/solicitudes"}>{t("solicitudDetalle.modificacionMensajeLinkText")}</Link>
            </Caja>
        </CoordinacionLayout>
    )
}

export default SolicitudesInformacion
