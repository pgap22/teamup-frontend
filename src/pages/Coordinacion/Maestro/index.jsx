import { eliminarMaestro, obtenerMaestros } from "src/api";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Tabla from "../../../components/ui/Tabla"
import { useFetchAndDelete } from "src/hooks/useFetchAndDelete";
import { docentesTransformarTabla } from "src/helper/transformarDatos";
import Skeleton from "src/components/ui/Skeleton";
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton";
import { useTranlate } from "src/hooks/useTranslation";

const Maestro = () => {
  const { isLoading, maestros, eliminar, } = useFetchAndDelete("maestros", obtenerMaestros, eliminarMaestro, docentesTransformarTabla);

  const { t } = useTranlate();

  return (
    <CoordinacionLayout titulo={t('teachers.title')}>
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {!isLoading && (
          <Tabla
            editar={false}
            titulo={t('teachers.listTitle')}
            cantidadTexto={`${maestros.length} ${t('teachers.teachers')}`}
            botonTexto={t('teachers.newTeacher')}
            listaDatos={maestros}
            borrarElemento={eliminar}
            botonUrl={"/coordinacion/maestros/crear"}
          />
        )}
      </Skeleton>
    </CoordinacionLayout>
  )
}

export default Maestro