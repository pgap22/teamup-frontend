import Partido from "src/components/estudiante/PartidoCard/Partido";
import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";
import { useFetch } from "src/hooks/useFetch";
import { obtenerMisPartidos } from "src/api/partidos";
import { Link } from "react-router-dom";

const Partidos = () => {
  const { isLoading, partidos } = useFetch("partidos", obtenerMisPartidos);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <EstudianteLayaout
      RightAsideButton={<IconButtonEquipos />}
      RightAsideTitulo={"Equipos"}
      RightAsideContent={<Equipos />}
      title={"Partidos"}
    >
      {<VistasPartido partidos={partidos} />}
    </EstudianteLayaout>
  );
};

const VistasPartido = ({ partidos }) => {
  return partidos.length === 0 ? (
    <NoHayPartidos />
  ) : (
    <PartidosContainer partidos={partidos} />
  );
};

const NoHayPartidos = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center text-center">
      <p className="text-[#A1A1A1] font-bold text-xl">
        You don't have any scheduled match
      </p>
      <p className="text-[#A1A1A1] font-bold text-xl">
        You can make the request to create one by{" "}
        <Link to={"/estudiante/solicitudes"} className="text-primary">
          clicking here!
        </Link>
      </p>
    </div>
  );
};

const PartidosContainer = ({ partidos }) => {
  return (
    <main className="flex flex-col sm:grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
      {partidos?.map((partido) => (
        <Partido
          url="/estudiante/partidos/"
          key={partido.id}
          partido={partido}
        />
      ))}
    </main>
  );
};

export default Partidos;
