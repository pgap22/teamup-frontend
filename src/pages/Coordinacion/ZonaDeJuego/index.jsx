import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "src/components/ui/Tabla"
import { useFetchAndDelete } from "src/hooks/useFetchAndDelete";
import { eliminarZonaDeJuego, obtenerZonasDeJuegos } from "src/api";
import { zonaJuegoTabla } from "src/helper/transformarDatos";

const ZonaDeJuego = () => {
  const {isLoading,zonadejuego,eliminar} = useFetchAndDelete("zonadejuego", obtenerZonasDeJuegos, eliminarZonaDeJuego, zonaJuegoTabla);
  
  if(isLoading) return <p>Cargando...</p>
  
  return (
    <CoordinacionLayout titulo={"Zona De Juego"}>
      <Tabla 
        titulo={"Lista De Zonas de juegos"}
        cantidadTexto={"1 Zona de juegos"}
        botonTexto={"Nueva Zona De Juego"}
        editarUrl={"/coordinacion/zonadejuego/editar"}
        listaDatos={zonadejuego}
        botonUrl={"/coordinacion/zonadejuego/crear"}
        borrarElemento={eliminar.mutate}
      />
    </CoordinacionLayout>
  );
};

export default ZonaDeJuego;
