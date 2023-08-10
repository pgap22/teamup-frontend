import { useParams } from "react-router-dom"
import { obtenerUnPartido } from "src/api/partidos"
import CoordinacionLayout from "src/components/layout/CoordinacionLayout"
import Skeleton from "src/components/ui/Skeleton"
import { useFetchId } from "src/hooks/useFetchId"

const SolicitudesInformacion = () => {
    const { id } = useParams();
    const { isLoading, partido } = useFetchId(id, obtenerUnPartido, 'partido');

    return (
        <Skeleton loading={isLoading} fallback={<p>Cargando...</p>}>
            <CoordinacionLayout titulo={"Solicitud N°"+partido.id}>
                
            </CoordinacionLayout>
        </Skeleton>
    )
}

export default SolicitudesInformacion
