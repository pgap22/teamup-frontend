import InicioRoutes from "./router/inicio";
import MaestroRoutes from "./router/maestro"
import EstudianteRoutes from "./router/estudiante"
import CoordinacionRoutes from "./router/coordinacion"
import { createBrowserRouter } from "react-router-dom";
import Animador from "./components/routes/Animador";


const router = createBrowserRouter([
  {
    element: <Animador />,
    children: [

      InicioRoutes,
      CoordinacionRoutes,
      MaestroRoutes,
      EstudianteRoutes,
    ]
  }
]);

export { router };
