import Crear from "src/pages/Coordinacion/ZonaDeJuego/Crear";
import ZonaDeJuego from "src/pages/Coordinacion/ZonaDeJuego";
import Editar  from "src/pages/Coordinacion/ZonaDeJuego/Editar";

const routes = {
    path: "zonadejuego",
    children: [
        {
            index: true,
            element: <ZonaDeJuego />,
        },
        {
            path: "crear",
            element: <Crear />
        },
        {
            path: "editar/:id",
            element: <Editar />
        }
    ]
}
export default routes;