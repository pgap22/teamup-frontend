import Partido from "src/components/estudiante/PartidoCard/Partido";
import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";
import { useFetch } from "src/hooks/useFetch";
import { obtenerMisPartidos } from "src/api/partidos";
import { Link } from "react-router-dom";
import { PageLoader } from "src/components/ui/PageLoader";
import { useTranlate } from "src/hooks/useTranslation";

const Partidos = () => {
  const { isLoading, partidos } = useFetch("partidos", obtenerMisPartidos);
  const { t } = useTranlate();

  if (isLoading) return <PageLoader />;

  return (
    <EstudianteLayaout
      RightAsideButton={<IconButtonEquipos />}
      RightAsideTitulo={t("equipos")}
      RightAsideContent={<Equipos />}
      title={t("partidos")}
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
  const { t } = useTranlate();

  return (
    <div className="flex flex-col items-center w-full gap-4 text-center">
      <p className="text-[#A1A1A1] font-bold text-xl">
        {t("noScheduledMatch")}
      </p>
      <p className="text-[#A1A1A1] font-bold text-xl">
        {t("makeRequestToCreateOne")}
        <Link to={"/estudiante/solicitudes"} className="text-primary">
          {t("clickingHere")}
        </Link>
        !
      </p>
    </div>
  );
};

const PartidosContainer = ({ partidos }) => {
  return (
    <main className="flex flex-col grid-cols-2 gap-4 sm:grid md:grid-cols-1 lg:grid-cols-2">
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
