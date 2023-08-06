import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";

import EquipoModal from "src/components/Modales/equipoModal/EquipoModal";

const Partidos = () => {
  return (
    <EstudianteLayaout
      RightAsideButton={<IconButtonEquipos />}
      RightAsideTitulo={"Equipos"}
      RightAsideContent={<Equipos />}
      title={"Partidos"}
    >
      Desde Partidos
      <EquipoModal />
    </EstudianteLayaout>
  );
};

export default Partidos;
