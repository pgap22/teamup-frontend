import PartidoInformacion from "src/pages/Estudiante/Partidos/PartidoInformacion";
import Partidos from "../../../pages/Estudiante/Partidos";
import AceptarPartido from "src/pages/Estudiante/Partidos/AceptarPartido";
import AceptarPartidosLayout from "src/pages/Estudiante/Partidos/AceptarPartido/Layout/AceptarPartidosLayout";

const routes = {
  path: "partidos",
  children: [
    {
      index: true,
      element: <Partidos />,
    },
    {
      path: ":id",
      element: <PartidoInformacion />,
    },
    {
      path: "aceptar/:id",
      element: <AceptarPartidosLayout />,
    },
  ],
};

export default routes;
