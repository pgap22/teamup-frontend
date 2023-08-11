import Partido from "src/components/estudiante/PartidoCard/Partido";
import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";
import { useFetch } from "src/hooks/useFetch";
import { obtenerMisPartidos } from "src/api/partidos";
import EquipoModal from "src/components/Modales/equipoModal/EquipoModal";

const Partidos = () => {
  const {isLoading, partidos} = useFetch('partidos', obtenerMisPartidos);

  if(isLoading) return <p>Cargando...</p>

  console.log(partidos)
  return (
    <EstudianteLayaout
      RightAsideButton={<IconButtonEquipos />}
      RightAsideTitulo={"Equipos"}
      RightAsideContent={<Equipos />}
      title={"Partidos"}
    >
      <main className="flex flex-col sm:grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
         {
          partidos?.map(partido =>  <Partido url="" key={partido.id} partido={partido} />)
         }
      </main>
      <EquipoModal />
    </EstudianteLayaout>
  );
};




export default Partidos;
