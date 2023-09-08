import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  aceptarPartidoMaestro,
  cancelarPartido,
  colocarAsistencia,
  enviarResultadosPartido,
  obtenerUnPartido,
} from "src/api/partidos";
import EquipoCard from "src/components/estudiante/EquipoCard/EquipoCard";
import EquipoCardResultado from "src/components/estudiante/EquipoCard/EquipoCardResultado";
import InfoCampo from "src/components/estudiante/InfoCampo";
import Button from "src/components/form/Button";
import MaestroLayout from "src/components/layout/MaestroLayout";
import Caja from "src/components/ui/Cajas/Caja";
import Loader from "src/components/ui/Loader";
import { MostrarBoton } from "src/components/ui/MostrarBoton";
import { PageLoader } from "src/components/ui/PageLoader";
import Skeleton from "src/components/ui/Skeleton";
import { useFetchClick } from "src/hooks/useFetchClick";
import { useModal } from "src/hooks/useModal";
import { useTranlate } from "src/hooks/useTranslation";
import { useSession } from "src/hooks/useSession";
const Solicitud = () => {
  const { t } = useTranlate();
  const [partido, setPartido] = useState({});
  const [partidoAceptado, setPartidoAceptado] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const {usuario} = useSession() 
  const [ModalAsistencia, modalAsistecia] = useModal();
  const [ModalResultado, modalResultado] = useModal();

  const {
    refetch: cuidarPartido,
    isLoading: loadingCuidar,
    registroExitoso: cuidarExitoso,
  } = useFetchClick("cuidar_partido", () => aceptarPartidoMaestro(id));
  const {
    refetch: tomarAsistencia,
    registroExitoso: asistenciaExito,
    isLoading: asistenciaLoading,
  } = useFetchClick("tomarAsistencia", () => colocarAsistencia(id));
  const {
    refetch: cancelarPartidoClick,
    registroExitoso: cancelarExito,
    isLoading: cancelarLoading,
  } = useFetchClick("cancelarPartido", () => cancelarPartido(id));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await obtenerUnPartido(id);
        setPartido(data);
      } catch (error) {
        navigate("/maestro");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (asistenciaExito) {
        modalAsistecia.toggleModal(false);
        setPartido({});
        const { data } = await obtenerUnPartido(id);
        setPartido(data);
      }
    })();
  }, [asistenciaExito]);

  useEffect(() => {
    if (cuidarExitoso) {
      setPartidoAceptado({
        titulo: t("partidoDetails.cuidarSolicitud.titulo"),
        subtitulo: t("partidoDetails.cuidarSolicitud.subtitulo"),
        descripcion: t("partidoDetails.cuidarSolicitud.descripcion"),
      });
    }
  }, [cuidarExitoso]);

  useEffect(() => {
    if (cancelarExito) {
      setPartidoAceptado({
        titulo: t("partidoDetails.cancelarSolicitud.titulo"),
        subtitulo: t("partidoDetails.cancelarSolicitud.subtitulo"),
        descripcion: t("partidoDetails.cancelarSolicitud.descripcion"),
      });
      modalAsistecia.toggleModal(false);
    }
  }, [cancelarExito]);

  const enviarResultadosSubmit = async (datos) => {
    try {
      await enviarResultadosPartido(id, datos);
      setPartidoAceptado({
        titulo: t("partidoDetails.enviarResultados.titulo"),
        subtitulo: t("partidoDetails.enviarResultados.subtitulo"),
        descripcion: t("partidoDetails.enviarResultados.descripcion"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!partido.id) return <PageLoader />;

  if (partidoAceptado)
    return <MensajeExito partidoAceptado={partidoAceptado} />;

  return (
    <MaestroLayout
      titulo={t("partidoDetails.pageTitle", { partidoId: partido.id })}
    >
      <Caja titulo={t("partidoDetails.generalDataTitle")}>
        <div className="space-y-4">
          <InfoCampo
            title={t("partidoDetails.zone")}
            value={
              !partido.ZonaDejuego
                ? t("partidoDetails.pending")
                : partido.ZonaDejuego.nombre
            }
          />
          <InfoCampo
            title={t("partidoDetails.sport")}
            value={partido.deporte.nombre}
          />
          <InfoCampo
            title={t("partidoDetails.teacher")}
            value={
              !partido.usuarioMaestro
                ? t("partidoDetails.pending")
                : partido.usuarioMaestro.nombre
            }
          />
        </div>
      </Caja>

      <div className="grid max-w-4xl grid-cols-1 gap-4 mt-5 md:grid-cols-2">
        <Caja titulo={t("partidoDetails.teams")}>
          <div className="grid grid-cols-1 gap-6 md:max-w-md sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <Link to={"/maestro/equipo/" + partido.equipo_local.nombre}>
              <EquipoCard equipo={partido.equipo_local} />
            </Link>
            <Link to={"/maestro/equipo/" + partido.equipo_visitante.nombre}>
              <EquipoCard equipo={partido.equipo_visitante} />
            </Link>
          </div>
        </Caja>
        <Caja
          className={"flex flex-col gap-2"}
          titulo={t("partidoDetails.actions")}
        >
          <div className="flex flex-col justify-center h-full gap-4">
            <MostrarBoton condicion={partido.estado.fase == 2 && partido.maestro_intermediario }>
              <Button
                disabled={loadingCuidar}
                onClick={cuidarPartido}
                className={"py-4 md:text-xl"}
                customBg={"#0F62FE"}
              >
                <Skeleton loading={loadingCuidar} fallback={<Loader />}>
                  {t("partidoDetails.careMatch")}
                </Skeleton>
              </Button>
            </MostrarBoton>
            <MostrarBoton condicion={partido.estado.fase == 4 && partido.id_usuarioMaestro == usuario.id}>
              <Button
                onClick={() => modalAsistecia.toggleModal(true)}
                className={"py-4 md:text-xl"}
                customBg={"#7E7E7E"}
              >
                {t("partidoDetails.takeAttendance")}
              </Button>
            </MostrarBoton>
            <MostrarBoton condicion={partido.estado.fase == 5 && partido.id_usuarioMaestro == usuario.id }>
              <Button
                onClick={() => modalResultado.toggleModal(true)}
                className={"py-4 md:text-xl"}
                customBg={"#cfb93d"}
              >
                {t("partidoDetails.sendResult")}
              </Button>
            </MostrarBoton>
          </div>
        </Caja>
      </div>

      <ModalAsistencia
        desktopTitle={t("partidoDetails.attendanceTitle")}
        {...modalAsistecia}
      >
        <div className="p-4">
          <div className="space-y-2">
            <p>{t("partidoDetails.clickAttendance")}</p>
            <Button disabled={asistenciaLoading} onClick={tomarAsistencia}>
              <Skeleton loading={asistenciaLoading} fallback={<Loader />}>
                {t("partidoDetails.takeAttendance")}
              </Skeleton>
            </Button>
          </div>

          <div className="mt-6 space-y-2">
            <p>{t("partidoDetails.ifTeamNotPresent")}</p>
            <Button
              disabled={cancelarLoading}
              onClick={cancelarPartidoClick}
              customBg={"#7E7E7E"}
            >
              <Skeleton fallback={<Loader />} loading={cancelarLoading}>
                {t("partidoDetails.cancelMatch")}
              </Skeleton>
            </Button>
          </div>
        </div>
      </ModalAsistencia>

      <ModalResultado
        desktopTitle={t("partidoDetails.resultTitle")}
        {...modalResultado}
      >
        <form
          onSubmit={handleSubmit(enviarResultadosSubmit)}
          className="p-4 space-y-2"
        >
          <p>{t("partidoDetails.sendMatchResults")}</p>
          <div className="space-y-2">
            <EquipoCardResultado
              register={register("resultado_local", {
                required: true,
                valueAsNumber: true,
              })}
              equipo={partido.equipo_local}
            />
            <EquipoCardResultado
              register={register("resultado_visitante", {
                required: true,
                valueAsNumber: true,
              })}
              equipo={partido.equipo_visitante}
            />
          </div>
          <Button disabled={isSubmitting}>
            <Skeleton loading={isSubmitting} fallback={<Loader />}>
              {t("partidoDetails.sendMatchResults")}
            </Skeleton>
          </Button>
        </form>
      </ModalResultado>
    </MaestroLayout>
  );
};

const MensajeExito = ({ partidoAceptado }) => {
  const { t } = useTranlate();
  return (
    <MaestroLayout titulo={partidoAceptado.titulo}>
      <Caja titulo={partidoAceptado.subtitulo}>
        <p>{partidoAceptado.descripcion}</p>

        <Link to={"/maestro"}>{t("volverInicio")}</Link>
      </Caja>
    </MaestroLayout>
  );
};

export default Solicitud;
