import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
    Equipos,
    IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";
import PartidoTitulo from "./components/PartidoTitulo";
import EstadoPartido from "./components/EstadoPartido";
import InfoCampo from "./components/InfoCampo";
import Button from "src/components/form/Button";
import EquipoCard from "./components/EquipoCard";

const Titulo = () => {
    return <PartidoTitulo titulo={"Partido N°1"} estado={<EstadoPartido titulo={"Pendiente"} />} />
}

const PartidoInformacion = () => {
    return (
        <EstudianteLayaout
            RightAsideButton={<IconButtonEquipos />}
            RightAsideTitulo={"Equipos"}
            RightAsideContent={<Equipos />}
            title={<Titulo />} >

            <main className="flex flex-col gap-4">
                <section>
                    <h2 className="font-bold text-xl mb-4">Datos Generales</h2>

                    <div className="flex flex-col gap-4">
                        <InfoCampo title={"Zona De Juego"} value={"loremawdawioawjdiawjidjdioajwidjawiodjwaiodjwaiodjawiodjawiodjiawojdioawjdioawjdoiawjdioawjoidwjaiodjawiodjaiwodjioawdjioawjdioawjdiowajdioawdjaiwodjwaiodjawiodjwiadjaidjaiwdjiawojdioaw"} />
                        <InfoCampo title={"Zona De Juego"} value={"Cancha Techada"} />
                        <InfoCampo title={"Zona De Juego"} value={"Cancha Techada"} />
                        <InfoCampo title={"Zona De Juego"} value={"Cancha Techada"} />
                    </div>
                </section>

                <section className="max-w-md">
                    <h2 className="font-bold text-xl mb-4">Equipos</h2>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">

                        <EquipoCard />
                        <EquipoCard />

                    </div>

                    <div className=" space-y-4 mt-4">
                    <Button className={"py-4 md:text-xl"} color={"verde"}>Aceptar Partido</Button>
                    <Button className={"py-4 md:text-xl"} color={"rojo"}>Rechazar Partido</Button>
                </div>
                </section>

           
            </main>
        </EstudianteLayaout>
    )
};




export default PartidoInformacion;
