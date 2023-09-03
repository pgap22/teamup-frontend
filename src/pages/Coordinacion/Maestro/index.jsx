import { eliminarMaestro, obtenerMaestros } from "src/api";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Tabla from "../../../components/ui/Tabla"
import { useFetchAndDelete } from "src/hooks/useFetchAndDelete";
import { docentesTransformarTabla } from "src/helper/transformarDatos";
import Skeleton from "src/components/ui/Skeleton";
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton";

const Maestro = () => {
  const { isLoading, maestros, eliminar, } = useFetchAndDelete("maestros", obtenerMaestros, eliminarMaestro, docentesTransformarTabla);


  return (
    <CoordinacionLayout titulo={"Maestros"}>
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {
          !isLoading && <Tabla
            editar={false}
            titulo={"Lista de Maestros"}
            cantidadTexto={maestros.length + " Maestro"}
            botonTexto={"Nuevo Maestro"}
            listaDatos={maestros}
            borrarElemento={eliminar}
            botonUrl={"/coordinacion/maestros/crear"}
          />
        }
      </Skeleton>
    </CoordinacionLayout>
  )
}

export default Maestro