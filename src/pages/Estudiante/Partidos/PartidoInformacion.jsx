import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";
import PartidoTitulo from "./components/PartidoTitulo";
import InfoCampo from "../../../components/estudiante/InfoCampo";
import Button from "src/components/form/Button";
import EquipoCard from "../../../components/estudiante/EquipoCard/EquipoCard";
import EstadoPartido from "src/components/estudiante/PartidoCard/EstadoPartido";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { aceptarResultados, cancelarPartido, cancelarResultados, colocarAsistencia, enviarResultadosPartido, obtenerUnPartido } from "src/api/partidos";
import { useModal as useModalPro } from "src/hooks/useModal";
import { useForm } from "react-hook-form";
import EquipoCardResultado from "src/components/estudiante/EquipoCard/EquipoCardResultado";
import { useSession } from "src/hooks/useSession";
import { useModal } from "src/store/useModal";
import CancelarPartidoModal from "./components/ModalCancelarPartido";
import ModalRechazarPartido from "./components/ModalRechazarPartido";
import { fechaNormal } from "src/helper";
import { PageLoader } from "src/components/ui/PageLoader";
import { MostrarBoton } from "src/components/ui/MostrarBoton";
// import PartidosRealizados from "src/pages/Coordinacion/Dashboard/components/PartidosRealizados";

const Titulo = ({ id, estado }) => {
  return (
    <PartidoTitulo
      titulo={"Partido N° " + id}
      estado={<EstadoPartido titulo={estado} />}
    />
  );
};

const PartidoInformacion = () => {
  const [partido, setPartido] = useState({});
  const [ModalResultado, modalResultado] = useModalPro();
  const [ModalAsistencia, modalAsistecia] = useModalPro();
  const [ModalAceptarResultado, modalAceptarResultado] = useModalPro();

  const { id } = useParams();
  const { usuario } = useSession();
  const { toggleModal } = useModal();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();


  const obtenerPartidosEstado = async () => {
    try {
      const { data } = await obtenerUnPartido(id);
      setPartido(data);
    } catch (error) {
      navigate("/estudiante/partidos");
    }
  }

  const enviarResultadosSubmit = async (datos) => {
    try {
      await enviarResultadosPartido(id, datos);
      modalResultado.toggleModal(false);
      obtenerPartidosEstado();
    } catch (error) {
      console.log(error)
    }
  }

  const tomarAsistencia = async () => {
    try {
      await colocarAsistencia(id);

      await obtenerPartidosEstado()

      modalAsistecia.toggleModal(false);
    } catch (error) {
      console.log(error)
    }
  }
  const cancelarPartidoClick = async () => {
    try {
      await cancelarPartido(id);

      modalAsistecia.toggleModal(false);

      navigate("/estudiante/exito", {
        state: {
          titulo: "Partido cancelado",
          subtitulo: "Cancelacion del partido completada",
          descripcion:
            "Has cancelado el partido por falta de asistencia",
          url: `/estudiante/partidos`,
          linkText: "Volver a partidos",
        },
      });

    } catch (error) {
      console.log(error)
    }
  }
  const cancelarResultadoClick = async () => {
    try {
      await cancelarResultados(id);

      await obtenerPartidosEstado()

      modalAceptarResultado.toggleModal(false);
    } catch (error) {
      console.log(error)
    }
  }
  const aceptarResultadoClick = async () => {
    try {
      await aceptarResultados(id);

      await obtenerPartidosEstado()

      modalAceptarResultado.toggleModal(false);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    obtenerPartidosEstado()
  }, []);

  if (!partido.id) return <PageLoader />;

  const partidoAceptarResultado = (partido.estado.fase == 5 && partido.resultado && partido.resultado.id_usuario_resultadoAceptar == usuario.id && partido.resultado.enviadoListo)
  const partidoCancelar = partido.equipo_visitante.id_lider !== usuario.id && partido.estado.fase === 1 && partido.equipo_local.id_lider == usuario.id
  const partidoEnviarResultado = partido.estado.fase == 5 && !partido.id_usuarioMaestro && (!partido.resultado || (!partido.resultado.enviadoListo && partido.resultado.id_usuario_resultadoPublicar == usuario.id))
  const partidoAceptarRechazar = partido.equipo_visitante.id_lider == usuario.id && partido.estado.fase === 1
  const partidoAsistencia = !partido.maestro_intermediario && partido.id_estado == 4 && partido.equipo_local.id_lider == usuario.id && !partido.usuarioMaestro

  return (
    <EstudianteLayaout
      RightAsideButton={<IconButtonEquipos />}
      RightAsideTitulo={"Equipos"}
      RightAsideContent={<Equipos />}
      title={<Titulo id={id} estado={partido.estado.nombre} />}
    >
      <main className="flex flex-col gap-4">
        <section>
          <h2 className="mb-4 text-xl font-bold">Datos Generales</h2>

          <div className="flex flex-col gap-4">
            <InfoCampo
              title={"Zona De Juego"}
              value={
                !partido.ZonaDejuego ? "Pendiente" : partido.ZonaDejuego.nombre
              }
            />
            <InfoCampo
              title={"Fecha/Hora"}
              value={fechaNormal(partido.fecha)}
            />
            <InfoCampo title={"Deporte"} value={partido.deporte.nombre} />
            <InfoCampo
              title={"Maestro Encargado"}
              value={
                !partido.usuarioMaestro
                  ? "Pendiente"
                  : partido.usuarioMaestro.nombre
              }
            />
          </div>
        </section>

        <section className="max-w-md">
          <h2 className="mb-4 text-xl font-bold">Equipos</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <EquipoCard equipo={partido.equipo_local} resultado={partido.resultado} esLocal />
            <EquipoCard equipo={partido.equipo_visitante} resultado={partido.resultado} />
          </div>


          <div className="mt-4 space-y-4 ">

            <MostrarBoton condicion={partidoAceptarRechazar}>
              <Button
                onClick={() => {
                  navigate(`/estudiante/partidos/aceptar/${partido.id}`);
                }}
                className={"py-3 md:text-xl"}
                color={"verde"}
              >
                Aceptar Partido
              </Button>
            </MostrarBoton>


            <MostrarBoton condicion={partidoAceptarRechazar}>
              <Button
                onClick={() => {
                  toggleModal("RechazarInvitacion");
                }}
                className={"py-3 md:text-xl"}
                color={"rojo"}
              >
                Rechazar Invitacion
              </Button>
            </MostrarBoton>


            <MostrarBoton condicion={partidoCancelar}>
              <Button
                onClick={() => {
                  toggleModal("CancelarPartido");
                }}
                className={"py-3 md:text-xl"}
                color={"rojo"}
              >
                Cancelar Partido
              </Button>
            </MostrarBoton>

            <MostrarBoton condicion={partidoEnviarResultado}>
              <Button onClick={() => modalResultado.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#cfb93d"}>Enviar Resultado</Button>
            </MostrarBoton>

            <MostrarBoton condicion={partidoAsistencia}>
              <Button onClick={() => modalAsistecia.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#7E7E7E"}>Tomar Asistencia</Button>
            </MostrarBoton>

            <MostrarBoton condicion={partidoAceptarResultado}>
              <Button onClick={() => modalAceptarResultado.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"rgb(234, 88, 12)"}>Aceptar Resultado</Button>
            </MostrarBoton>
          </div>

        </section>


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

        <ModalAceptarResultado desktopTitle="Resultados" {...modalAceptarResultado}>
          <div className="p-4">
            <p>Estos son los resultados que el lider del equipo local envio</p>
            <div className="flex gap-6">
              <p><span className="font-bold">{partido.equipo_local.nombre}: </span>{partido.resultado && partido.resultado.resultado_local}</p>
              <p><span className="font-bold">{partido.equipo_visitante.nombre}: </span>{partido.resultado && partido.resultado.resultado_visitante}</p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Button onClick={aceptarResultadoClick} color={'verde'}>Aceptar Resultado</Button>
              <Button onClick={cancelarResultadoClick} customBg={'#7E7E7E'}>Cancelar Resultado</Button>
            </div>
          </div>
        </ModalAceptarResultado>

        <CancelarPartidoModal id={partido.id} />
        <ModalRechazarPartido id={partido.id} />
      </main>
    </EstudianteLayaout>
  );
};



export default PartidoInformacion;
