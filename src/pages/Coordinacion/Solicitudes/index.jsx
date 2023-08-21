import Tabla from "src/components/ui/Tabla"
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Button from "src/components/form/Button"
import { useFetch } from "src/hooks/useFetch"
import { obtenerPartidosCoordinacionPendientes } from "src/api/partidos"
import { solicitudesTablaCoordinacion } from "src/helper/transformarDatos"
import { Link } from "react-router-dom"
import Skeleton from "src/components/ui/Skeleton"
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton"

const Solicitudes = () => {

  const { isLoading, solicitudes } = useFetch("solicitudes", obtenerPartidosCoordinacionPendientes, solicitudesTablaCoordinacion)


  return (
    <CoordinacionLayout titulo={"Solicitudes"}>
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {
          !isLoading && (
            <Tabla
              titulo={"Solicitudes Pendientes"}
              cantidadTexto={solicitudes.length + " Solicitud"}
              listaDatos={solicitudes}
              boton={false}
              acciones={false}
              accionesCustomLabel={" "}
              AccionesCustomElement={({ dato }) => (
                <Link to={"" + dato.ID}>
                  <Button>Mas Informacion</Button>
                </Link>
              )}
            />
          )
        }
      </Skeleton>
    </CoordinacionLayout>
  )
}

export default Solicitudes