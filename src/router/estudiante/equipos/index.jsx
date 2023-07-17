import Equipos from "../../../pages/Estudiante/Equipos";
import DatosEquipo from "../../../pages/Estudiante/DatosEquipo";

const routes = {
  path: "equipos",
  children: [
    {
      index: true,
      element: <Equipos />,
    },
    {
      path: ":id",
      element: <DatosEquipo />,
    },
  ],
};

export default routes;
