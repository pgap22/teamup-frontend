import RolRoute from "../../components/routes/RolRoute";
import DashboardMaestro from "../../pages/Maestro/Dashboard";

const routes = {
    path: "/maestro",
    element: <RolRoute rol={"MAESTRO"} />,
    children: [
        {
            index: true,
            element: <DashboardMaestro />,
        },
    ],
}

export default routes;