import PartidoInformacion from "src/pages/Estudiante/Partidos/PartidoInformacion";
import Partidos from "../../../pages/Estudiante/Partidos";

const routes = {
  path: "partidos",
  children: [
    {
      index: true,
      element: <Partidos />,
    },
    {
      path: ":id",
      element: <PartidoInformacion />
    }
  ]
};

export default routes;
