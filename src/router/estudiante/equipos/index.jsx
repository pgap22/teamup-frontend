import Equipos from "../../../pages/Estudiante/Equipos";
import DatosEquipo from "../../../pages/Estudiante/DatosEquipo";
import UnirseToken from "src/pages/Estudiante/Equipos/unirseToken";

const routes = {
  path: "equipos",
  children: [
    {
      index: true,
      element: <Equipos />,
    },
    {
      path: "datos/:id",
      element: <DatosEquipo />,
    },
    {
      path: "unirse/:token",
      element: <UnirseToken />,
    },
  ],
};

export default routes;
