import { useParams } from "react-router-dom";
import { useFetchId } from "../../../hooks/useFetchId";

import { obtenerUnEquipo } from "../../../api";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import VistaLider from "./Components/VistaLider/VistaLider";
import VistaMiembro from "./Components/VistaMiembro/VistaMiembro";
import { useSession } from "src/hooks/useSession";
import { miembrosEquipo } from "src/helper/transformarDatos";

const VistaEquipo = ({ equipo }) => {
  const rango = equipo.rango;
  const err = equipo.error;
  const View = () => {
    if (rango === "Lider") return <VistaLider equipo={equipo} />;
    if (rango === "Miembro") return <VistaMiembro equipo={equipo} />;
    return err ? <p>{err}</p> : <p>Error desconocido</p>;
  };

  return <View />;
};

const DatosEquipo = () => {
  const { usuario } = useSession();
  const { id } = useParams();
  const { isLoading, equipo } = useFetchId(id, obtenerUnEquipo, "equipo", miembrosEquipo);

  if (isLoading) return <p>Loading....</p>;

  console.log(equipo)

  const { id: id_usuario } = usuario;
  const { lider } = equipo;

  const invitarJugadores = lider.id === id_usuario;
  const handleClick = () => { };

  return (
    <EstudianteLayaout
      title={equipo.nombre || "Error"}
      textButton={invitarJugadores && "Invitar jugadores"}
      onClickButton={invitarJugadores && handleClick}
    >
      <VistaEquipo equipo={equipo} />
    </EstudianteLayaout>
  );
};
export default DatosEquipo;
