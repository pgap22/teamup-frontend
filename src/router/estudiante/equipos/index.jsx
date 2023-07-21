import Equipos from "../../../pages/Estudiante/Equipos";
import DatosEquipo from "../../../pages/Estudiante/DatosEquipo";
import UnirseEquipoPage from "../../../pages/Estudiante/Equipos/UnirseEquipo/index";

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
      path: "unirse",
      element: <UnirseEquipoPage />,
    },
  ],
};

export default routes;
