import InicioRoutes from "./router/inicio";
import MaestroRoutes from "./router/maestro"
import EstudianteRoutes from "./router/estudiante"
import CoordinacionRoutes from "./router/coordinacion"
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  InicioRoutes,
  CoordinacionRoutes,
  MaestroRoutes,
  EstudianteRoutes,
]);

export { router };
