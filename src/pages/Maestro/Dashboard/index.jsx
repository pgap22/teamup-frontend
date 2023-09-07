import { Link } from "react-router-dom"
import { obtenerPartidosCuidarMaestro, obtenerPartidosPendientes } from "src/api/partidos"
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton"
import Partido from "src/components/estudiante/PartidoCard/Partido"
import Button from "src/components/form/Button"
import MaestroLayout from "src/components/layout/MaestroLayout"
import Caja from "src/components/ui/Cajas/Caja"
import Loader from "src/components/ui/Loader"
import { PageLoader } from "src/components/ui/PageLoader"
import Skeleton from "src/components/ui/Skeleton"
import Tabla from "src/components/ui/Tabla"
import { solicitudesTabla } from "src/helper/transformarDatos"
import { useFetch } from "src/hooks/useFetch"
import { useTranlate } from "src/hooks/useTranslation"

const Dashboard = () => {

  const {t} = useTranlate();
  const { isLoading: isLoadingPartidos, partidos } = useFetch('partidos', obtenerPartidosCuidarMaestro)
  const { isLoading, solicitudes } = useFetch('solicitudes', obtenerPartidosPendientes, solicitudesTabla);

  return (
    <MaestroLayout titulo={t('maestro.inicio')}>
    <div className="space-y-4">
      <Skeleton loading={isLoadingPartidos} fallback={<PartidoSkeleton />}>

        <Caja titulo={t('maestro.partidosCuidar')}>
          <div className="max-w-full scroll-p-2 flex gap-5 overflow-auto">
            {partidos && partidos.map(partidoItem => (
              <div key={partidoItem.id} className="min-w-[300px]">
                <Partido partido={partidoItem} url={"solicitud/"} />
              </div>
            ))}
          </div>
        </Caja>
      </Skeleton>

      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {solicitudes && <Tabla
          titulo={t('maestro.solicitudesPendientes')}
          cantidadTexto={`${solicitudes.length} ${t('maestro.solicitudes')}`}
          listaDatos={solicitudes}
          boton={false}
          acciones={false}
          accionesCustomLabel={" "}
          AccionesCustomElement={({ dato }) => (
            <Link to={`solicitud/${dato.ID}`}>
              <Button>{t('maestro.masInformacion')}</Button>
            </Link>
          )}
        />}
      </Skeleton>
    </div>
  </MaestroLayout>
  )
}

const PartidoSkeleton = ()=>{
  const {t} = useTranlate();

  return (
    <Caja titulo={t('maestro.partidosCuidar')}>
      <div className="h-10">
        <div className="flex items-center gap-4">
          <p className="font-bold text-gray-500">{t('maestro.cargandoPartidos')}</p>
          <Loader color="blue" />
        </div>
      </div>
    </Caja>
  );
}

export default Dashboard
