import Deportes from "../../../pages/Coordinacion/Deportes";
import DeporteCrear from "../../../pages/Coordinacion/Deportes/Crear";
import DeporteEditar from "../../../pages/Coordinacion/Deportes/Editar";

const routes = {
    path: "deportes",
    children: [
      {
        index: true,
        element: <Deportes />,
      },
      {
        path: "crear",
        element: <DeporteCrear />,
      },
      {
        path: "editar/:id",
        element: <DeporteEditar />
      }
    ],
}

export default routes;