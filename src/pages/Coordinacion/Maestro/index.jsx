import { eliminarMaestro, obtenerMaestros } from "src/api";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Tabla from "../../../components/ui/Tabla"
import { useFetchAndDelete } from "src/hooks/useFetchAndDelete";
import { docentesTransformarTabla } from "src/helper/transformarDatos";

const Maestro = () => {
  const {isLoading, maestros, eliminar, }= useFetchAndDelete("maestros", obtenerMaestros, eliminarMaestro, docentesTransformarTabla);
  
  if (isLoading) return <p>Cargando...</p>

  return (
    <CoordinacionLayout titulo={"Maestros"}>
        <Tabla 
          editar={false}
          titulo={"Lista de Maestros"}
          cantidadTexto= {maestros.length +" Maestro"}
          botonTexto={"Nuevo Maestro"}
          listaDatos={maestros}
          borrarElemento={eliminar.mutate}
          botonUrl={"/coordinacion/maestros/crear"}
        />
    </CoordinacionLayout>
  )
}

export default Maestro