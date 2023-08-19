import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { useSession } from "src/hooks/useSession";
import { useFetchId } from "src/hooks/useFetchId";

import { obtenerMiembrosPartido, obtenerUnPartido } from "src/api/partidos";

import AceptarPartido from "..";

const AceptarPartidosLayout = () => {
  const { id } = useParams();

  const {
    partido,
    isLoading: isLoadingPartido,
    error,
  } = useFetchId(id, obtenerUnPartido, "partido");

  const [equipo, setEquipo] = useState([]);

  const { usuario } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (partido.id) {
          if (partido.equipo_visitante.id_lider !== usuario.id)
            navigate("/estudiante/partidos");
          const { data } = await obtenerMiembrosPartido(partido.id);
          setEquipo(data);
        }
      } catch (error) {
        console.log(error);
        navigate("/estudiante/partidos");
      }
    })();
  }, [partido]);

  useEffect(() => {
    if (!id) {
      navigate("/estudiante/partidos");
    }
  }, []);
  if (error) navigate("/estudiante/partidos");
  if (isLoadingPartido) return <p>Cargando . . . .</p>;

  return (
    partido &&
    equipo.length > 0 && <AceptarPartido partido={partido} miembros={equipo} />
  );
};

export default AceptarPartidosLayout;
