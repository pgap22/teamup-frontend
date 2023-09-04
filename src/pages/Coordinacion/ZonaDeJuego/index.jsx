import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "src/components/ui/Tabla"
import { useFetchAndDelete } from "src/hooks/useFetchAndDelete";
import { eliminarZonaDeJuego, obtenerZonasDeJuegos } from "src/api";
import { zonaJuegoTabla } from "src/helper/transformarDatos";
import Skeleton from "src/components/ui/Skeleton";
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton";
import { useTranlate } from "src/hooks/useTranslation";

const ZonaDeJuego = () => {
  const { isLoading, zonadejuego, eliminar } = useFetchAndDelete("zonadejuego", obtenerZonasDeJuegos, eliminarZonaDeJuego, zonaJuegoTabla);
  const {t} = useTranlate();

  return (
  <CoordinacionLayout titulo={t('playZone.title')}>
    <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
      {!isLoading && (
        <Tabla
          titulo={t('playZone.listTitle')}
          cantidadTexto={`${zonadejuego.length} ${t('playZone.playZones')}`}
          botonTexto={t('playZone.newPlayZone')}
          editarUrl={"/coordinacion/zonadejuego/editar"}
          listaDatos={zonadejuego}
          botonUrl={"/coordinacion/zonadejuego/crear"}
          borrarElemento={eliminar}
        />
      )}
    </Skeleton>
  </CoordinacionLayout>
  );
};

export default ZonaDeJuego;
