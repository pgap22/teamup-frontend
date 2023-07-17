import { useParams } from "react-router-dom";
import { useFetchId } from "../../../hooks/useFetchId";

import { obtenerUnEquipo } from "../../../api";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import VistaLider from "./Components/VistaLider/VistaLider";
import VistaMiembro from "./Components/VistaMiembro/VistaMiembro";

const VistaEquipo = ({ equipo }) => {
  const { rango } = equipo;
  return rango === "Lider" ? <VistaLider equipo={equipo} /> : <VistaMiembro />;
};

const DatosEquipo = () => {
  const { id } = useParams();
  const { isLoading, equipo } = useFetchId(id, obtenerUnEquipo, "equipo");
  if (isLoading) return <p>Loading....</p>;
  return (
    <EstudianteLayaout
      title={equipo.nombre}
      textButton={"Invitar jugadores"}
      onClickButton={() => {}}
    >
      <VistaEquipo equipo={equipo} />
    </EstudianteLayaout>
  );
};
export default DatosEquipo;

//   {
//     id: 1,
//     nombre: 'Supra',
//     avatar_url: 'uploads/default/defaultAvatar.png',
//     password_access: '$2b$10$ZBOasAgR.rfA5ZCGb71i5eK8rnTSB3xS7hQqeqWUn0KQFVVlMXkT.',
//     id_lider: 2,
//     usuarios: [],
//     rango: 'Lider'
//   }
