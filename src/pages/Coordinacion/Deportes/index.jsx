import { eliminarDeporte, obtenerDeportes } from "../../../api";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "../../../components/ui/Tabla";
import { deportesTransformar } from "../../../helper/transformarDatos";
import { useFetchAndDelete } from "../../../hooks/useFetchAndDelete";

const Deportes = () => {

  const { isLoading, deportes, eliminar } = useFetchAndDelete("deportes", obtenerDeportes, eliminarDeporte, deportesTransformar);

  if (isLoading) return <p>Cargando...</p>


  return (
    <CoordinacionLayout titulo={"Deportes"}>
      <Tabla
        titulo={"Lista Deportes"}
        cantidadTexto={deportes.length + " Deportes"}
        botonTexto={"Nuevo Deporte"}
        listaDatos={deportes}
        botonUrl={"/coordinacion/deportes/crear"}
        editarUrl={"/coordinacion/deportes/editar"}
        borrarElemento={eliminar.mutate}
      />
    </CoordinacionLayout>
  );
};


export default Deportes;
