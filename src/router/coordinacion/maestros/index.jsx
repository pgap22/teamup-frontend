import Crear from "src/pages/Coordinacion/Maestro/crear";
import Maestro from "../../../pages/Coordinacion/Maestro";
const routes =  {
    path: "maestros",
    children: [
        {
            element: <Maestro />,
            index: true
        },
        {
            path: "crear",
            element: <Crear />
        }
    ]
}

export default routes;