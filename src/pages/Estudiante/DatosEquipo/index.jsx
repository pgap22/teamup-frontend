import { useParams } from "react-router-dom";
import { useFetchId } from "../../../hooks/useFetchId";

import { obtenerUnEquipo } from "../../../api";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import VistaLider from "./Components/VistaLider/VistaLider";
import VistaMiembro from "./Components/VistaMiembro/VistaMiembro";

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
  const { id } = useParams();
  const { isLoading, equipo } = useFetchId(id, obtenerUnEquipo, "equipo");
  if (isLoading) return <p>Loading....</p>;

  return (
    <EstudianteLayaout
      title={equipo.nombre || "Error"}
      textButton={"Invitar jugadores"}
      onClickButton={() => {}}
    >
      <VistaEquipo equipo={equipo} />
    </EstudianteLayaout>
  );
};
export default DatosEquipo;

// {
//   id: 1,
//   nombre: 'La concha 6969',
//   avatar_url: 'uploads/default/defaultAvatar.png',
//   password_access: '$2b$10$e80JIO4BlQ571pxbgDJGueVvRdxmc5fnLBzRcT5DaScSviJsFSenK',
//   id_lider: 2,
//   lider: { id: 2, nombre: 'Nacely' },
//   usuarios: [
//     { id_usuarios: 5, usuarios: { id: 5, nombre: 'Damaris' } }, { id_usuarios: 6, usuarios: { id: 6, nombre: 'Alan' } },

//   ],
//   rango: 'Lider'
// }
