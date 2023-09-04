import Tabla from "src/components/ui/Tabla"
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Button from "src/components/form/Button"
import { useFetch } from "src/hooks/useFetch"
import { obtenerPartidosCoordinacionPendientes } from "src/api/partidos"
import { solicitudesTablaCoordinacion } from "src/helper/transformarDatos"
import { Link } from "react-router-dom"
import Skeleton from "src/components/ui/Skeleton"
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton"
import { useTranlate } from "src/hooks/useTranslation"

const Solicitudes = () => {

  const { isLoading, solicitudes } = useFetch("solicitudes", obtenerPartidosCoordinacionPendientes, solicitudesTablaCoordinacion)
  const { t } = useTranlate();


  return (
    <CoordinacionLayout titulo={t('solicitudes.title')}>
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {!isLoading && (
          <Tabla
            titulo={t('solicitudes.pendingRequests')}
            cantidadTexto={`${solicitudes.length} ${t('solicitudes.request')}`}
            listaDatos={solicitudes}
            boton={false}
            acciones={false}
            accionesCustomLabel=" "
            AccionesCustomElement={({ dato }) => (
              <Link to={"" + dato.ID}>
                <Button>{t('solicitudes.moreInformation')}</Button>
              </Link>
            )}
          />
        )}
      </Skeleton>
    </CoordinacionLayout>
  )
}

export default Solicitudes