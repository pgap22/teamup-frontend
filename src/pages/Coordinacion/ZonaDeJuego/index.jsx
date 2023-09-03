import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "src/components/ui/Tabla"
import { useFetchAndDelete } from "src/hooks/useFetchAndDelete";
import { eliminarZonaDeJuego, obtenerZonasDeJuegos } from "src/api";
import { zonaJuegoTabla } from "src/helper/transformarDatos";
import Skeleton from "src/components/ui/Skeleton";
import TablaSkeleton from "src/components/coordinacion/TablaSkeleton";

const ZonaDeJuego = () => {
  const { isLoading, zonadejuego, eliminar } = useFetchAndDelete("zonadejuego", obtenerZonasDeJuegos, eliminarZonaDeJuego, zonaJuegoTabla);


  return (
    <CoordinacionLayout titulo={"Zona De Juego"}>
      <Skeleton loading={isLoading} fallback={<TablaSkeleton />}>
        {!isLoading && (<Tabla
          titulo={"Lista De Zonas de juegos"}
          cantidadTexto={`${zonadejuego.length} Zona de juegos`}
          botonTexto={"Nueva Zona De Juego"}
          editarUrl={"/coordinacion/zonadejuego/editar"}
          listaDatos={zonadejuego}
          botonUrl={"/coordinacion/zonadejuego/crear"}
          borrarElemento={eliminar}
        />)}
      </Skeleton>
    </CoordinacionLayout>
  );
};

export default ZonaDeJuego;
