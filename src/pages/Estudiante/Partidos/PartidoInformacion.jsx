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
import { enviarResultadosPartido, obtenerUnPartido } from "src/api/partidos";
import { useModal } from "src/hooks/useModal";
import Input from "src/components/form/Input";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import EquipoCardResultado from "src/components/estudiante/EquipoCard/EquipoCardResultado";

const Titulo = ({ id, estado }) => {
    return <PartidoTitulo titulo={"Partido N° " + id} estado={<EstadoPartido titulo={estado} />} />
}

const PartidoInformacion = () => {

    const [partido, setPartido] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const [ModalResultado, modalResultado] = useModal();

    const { register, handleSubmit } = useForm();

    const enviarResultadosSubmit = async (datos) => {
        try {
            await enviarResultadosPartido(id, datos);
            console.log("Bien !")
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
                navigate("/estudiante/partidos")
            }
        })()
    }, [])


    if (!partido.id) return <p>Cargando...</p>


    return (
        <EstudianteLayaout
            RightAsideButton={<IconButtonEquipos />}
            RightAsideTitulo={"Equipos"}
            RightAsideContent={<Equipos />}
            title={<Titulo id={id} estado={partido.estado.nombre} />} >

            <main className="flex flex-col gap-4">
                <section>
                    <h2 className="font-bold text-xl mb-4">Datos Generales</h2>

                    <div className="flex flex-col gap-4">
                        <InfoCampo title={"Zona De Juego"} value={!partido.ZonaDejuego ? 'Pendiente' : partido.ZonaDejuego.nombre} />
                        <InfoCampo title={"Deporte"} value={partido.deporte.nombre} />
                        <InfoCampo title={"Maestro Encargado"} value={!partido.usuarioMaestro ? 'Pendiente' : partido.usuarioMaestro.nombre} />
                    </div>
                </section>

                <section className="max-w-md">
                    <h2 className="font-bold text-xl mb-4">Equipos</h2>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                        <EquipoCard equipo={partido.equipo_local} />
                        <EquipoCard equipo={partido.equipo_visitante} />
                    </div>

                    <div className=" space-y-4 mt-4">
                        {
                            (partido.estado.fase == 5 && !partido.id_usuarioMaestro) && <Button onClick={() => modalResultado.toggleModal(true)} className={"py-4 md:text-xl"} customBg={"#cfb93d"}>Enviar Resultado</Button>
                        }
                        {/* <Button className={"py-4 md:text-xl"} color={"verde"}>Aceptar Partido</Button>
                        <Button className={"py-4 md:text-xl"} color={"rojo"}>Rechazar Partido</Button> */}
                    </div>

                </section>


            </main>
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
        </EstudianteLayaout>
    )
};

export default PartidoInformacion;
