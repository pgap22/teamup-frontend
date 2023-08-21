import Skeleton from "src/components/ui/Skeleton";
import { eliminarDeporte, obtenerDeportes } from "../../../api";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "../../../components/ui/Tabla";
import { deportesTransformar } from "../../../helper/transformarDatos";
import { useFetchAndDelete } from "../../../hooks/useFetchAndDelete";

import { HashLoader } from "react-spinners"
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton";

const Deportes = () => {

  const { isLoading, deportes, eliminar } = useFetchAndDelete("deportes", obtenerDeportes, eliminarDeporte, deportesTransformar);



  return (
    <CoordinacionLayout titulo={"Deportes"}>
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {
          !isLoading && (<Tabla
            titulo={"Lista Deportes"}
            cantidadTexto={deportes.length + " Deportes"}
            botonTexto={"Nuevo Deporte"}
            listaDatos={deportes}
            botonUrl={"/coordinacion/deportes/crear"}
            editarUrl={"/coordinacion/deportes/editar"}
            borrarElemento={eliminar.mutate}
          />)
        }
      </Skeleton>
    </CoordinacionLayout>
  );
};


export default Deportes;
