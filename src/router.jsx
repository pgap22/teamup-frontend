import InicioRoutes from "./router/inicio";
import MaestroRoutes from "./router/maestro";
import EstudianteRoutes from "./router/estudiante";
import CoordinacionRoutes from "./router/coordinacion";
import { createBrowserRouter } from "react-router-dom";
import Animador from "./components/routes/Animador";
import Error404 from "./pages/error";
import { TranaslationProvider } from "src/context/Translate";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    element: (
      <TranaslationProvider>
        <Animador />
      </TranaslationProvider>
    ),
    children: [
      InicioRoutes,
      CoordinacionRoutes,
      MaestroRoutes,
      EstudianteRoutes,
    ],
    errorElement: <Error404 />,
  },
]);

export { router };
