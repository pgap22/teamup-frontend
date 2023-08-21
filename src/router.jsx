import InicioRoutes from "./router/inicio";
import MaestroRoutes from "./router/maestro"
import EstudianteRoutes from "./router/estudiante"
import CoordinacionRoutes from "./router/coordinacion"
import { createBrowserRouter } from "react-router-dom";
import Animador from "./components/routes/Animador";
import Error404 from "./pages/error";


const router = createBrowserRouter([
  {
    element: <Animador />,
    children: [
      InicioRoutes,
      CoordinacionRoutes,
      MaestroRoutes,
      EstudianteRoutes,
    ],
    errorElement: <Error404/>
  }
]);

export { router };
