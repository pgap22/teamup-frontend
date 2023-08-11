import Tabla from "src/components/ui/Tabla"
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Button from "src/components/form/Button"
import { useFetch } from "src/hooks/useFetch"
import { obtenerPartidosCoordinacionPendientes } from "src/api/partidos"
import { solicitudesTablaCoordinacion } from "src/helper/transformarDatos"
import { Link } from "react-router-dom"

const Solicitudes = () => {

  const { isLoading, solicitudes } = useFetch("solicitudes", obtenerPartidosCoordinacionPendientes, solicitudesTablaCoordinacion)

  if (isLoading) return <p>Cargando...</p>

  return (
    <CoordinacionLayout titulo={"Solicitudes"}>
      <Tabla
        titulo={"Solicitudes Pendientes"}
        cantidadTexto={solicitudes.length+" Solicitud"}
        listaDatos={solicitudes}
        boton={false}
        acciones={false}
        accionesCustomLabel={" "}
        AccionesCustomElement={({dato}) => (
          <Link to={""+dato.ID}>
            <Button>Mas Informacion</Button>
          </Link>
        )}
      />
    </CoordinacionLayout>
  )
}

export default Solicitudes