import { Link } from "react-router-dom"
import { obtenerPartidosPendientes } from "src/api/partidos"
import Partido from "src/components/estudiante/PartidoCard/Partido"
import Button from "src/components/form/Button"
import MaestroLayout from "src/components/layout/MaestroLayout"
import Caja from "src/components/ui/Cajas/Caja"
import Tabla from "src/components/ui/Tabla"
import { solicitudesTabla } from "src/helper/transformarDatos"
import { useFetch } from "src/hooks/useFetch"

const Dashboard = () => {

  const { isLoading ,solicitudes } = useFetch('solicitudes', obtenerPartidosPendientes, solicitudesTabla);

  if(isLoading) return <p>Cargando...</p>

  return (
    <MaestroLayout titulo={"Inicio"}>
      <div className=" space-y-4">
        <Caja titulo={"Partidos que cuidar"}>
          <div className="max-w-full scroll-p-2 flex gap-5 overflow-auto">

            <div className="min-w-[300px]">
              <Partido url="solicitud/1"  />
            </div>
            <div className="min-w-[300px]">
              <Partido url="solicitud/1"  />
            </div>
            <div className="min-w-[300px]">
              <Partido url="solicitud/1"  />
            </div>

          </div>
        </Caja>

        <Tabla
          titulo={"Solicitudes Pendientes"}
          cantidadTexto={`${solicitudes.length} Solicitudes`}
          listaDatos={solicitudes}
          boton={false}
          acciones={false}
          accionesCustomLabel={" "}
          AccionesCustomElement={({dato}) => (
            <Link to={"solicitud/"+dato.ID}>
              <Button>Mas Informacion</Button>
            </Link>
          )}
        />

      </div>
    </MaestroLayout>
  )
}

export default Dashboard