import BuscarEquipo from "src/pages/Maestro/BuscarEquipo";
import RolRoute from "../../components/routes/RolRoute";
import DashboardMaestro from "../../pages/Maestro/Dashboard";
import Solicitud from "src/pages/Maestro/Solicitud";
import EquipoInformacion from "src/pages/Maestro/BuscarEquipo/EquipoInformacion";

const routes = {
    path: "/maestro",
    element: <RolRoute rol={"MAESTRO"} />,
    children: [
        {
            index: true,
            element: <DashboardMaestro />,
        },
        {
            path: "solicitud/:id",
            element: <Solicitud />
        },
        {
            path: 'buscar',
            element: <BuscarEquipo />,
        },
        {
            path: "equipo/:nombre",
            element: <EquipoInformacion />
        }
    ],
}

export default routes;