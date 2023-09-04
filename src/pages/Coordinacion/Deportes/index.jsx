import Skeleton from "src/components/ui/Skeleton";
import { eliminarDeporte, obtenerDeportes } from "../../../api";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "../../../components/ui/Tabla";
import { deportesTransformar } from "../../../helper/transformarDatos";
import { useFetchAndDelete } from "../../../hooks/useFetchAndDelete";

import TablaSkeleton from "src/components/coordinacion/TablaSkeleton";
import { useTranlate } from "src/hooks/useTranslation";

const Deportes = () => {
  const { t } = useTranlate();
  const { isLoading, deportes, eliminar } = useFetchAndDelete("deportes", obtenerDeportes, eliminarDeporte, deportesTransformar);


  return (
    <CoordinacionLayout titulo={t('sportsPage.title')} >
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {
          !isLoading && (
            <Tabla
              titulo={t('sportsList.title')}
              cantidadTexto={t('sportsList.numberOfSports', { count: deportes.length })}
              botonTexto={t('sportsList.newSport')}
              listaDatos={deportes}
              botonUrl={"/coordinacion/deportes/crear"}
              editarUrl={"/coordinacion/deportes/editar"}
              borrarElemento={eliminar}
            />
          )
        }
      </Skeleton>
    </CoordinacionLayout>
  );
};


export default Deportes;
