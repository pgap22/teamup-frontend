import RolRoute from "../../components/routes/RolRoute";

import DasboardEstudiante from "../../pages/Estudiante/Dashboard";
import EquiposRoutes from "./equipos";
import SolicitudesRoutes from "./solicitudes";
import PartidosRoutes from "./partidos";
import ExitoRouter from "./exito";

const routes = {
  path: "/estudiante",
  element: <RolRoute rol="ESTUDIANTE" />,
  children: [
    {
      index: true,
      element: <DasboardEstudiante />,
    },
    EquiposRoutes,
    SolicitudesRoutes,
    PartidosRoutes,
    ExitoRouter,
  ],
};

export default routes;
