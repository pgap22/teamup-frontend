import SolicitudesInformacion from "src/pages/Coordinacion/Solicitudes/SolicitudesInformacion";
import Solicitudes from "../../../pages/Coordinacion/Solicitudes";

const routes = {
    path: "solicitudes",
    children: [
        {
            index: true,
            element: <Solicitudes />
        },
        {
            path: ":id",
            element: <SolicitudesInformacion />
        }
    ]
}

export default routes;