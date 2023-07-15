import RolRoute from "../../components/routes/RolRoute";
import Dashboard from "../../pages/Coordinacion/Dashboard";

import DeportesRoutes from "./deportes"
import ZonaDeJuegoRoutes from "./zonadejuego"
import MaestroRoutes from "./maestros"
import SolicitudesRoutes from "./solicitudes"

const routes =  {
    path: "/coordinacion",
    element: <RolRoute rol="COORDINADOR" />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      DeportesRoutes,
      ZonaDeJuegoRoutes,
      MaestroRoutes,
      SolicitudesRoutes
    ],
}

export default routes;