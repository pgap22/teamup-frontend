import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";
import Partido from "./components/Partido";

const Partidos = () => {
  return (
    <EstudianteLayaout
      RightAsideButton={<IconButtonEquipos />}
      RightAsideTitulo={"Equipos"}
      RightAsideContent={<Equipos />}
      title={"Partidos"}
    >
      <main className="flex flex-col sm:grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <Partido />
          <Partido />
          <Partido />
          <Partido />
          <Partido />
          <Partido />
          <Partido />
      </main>
    </EstudianteLayaout>
  );
};




export default Partidos;
