import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Coordinacion/Dashboard";
import DashboardMaestro from "./pages/Maestro/Dashboard";

import Deportes from "./pages/Coordinacion/Deportes";
import ZonaDeJuego from "./pages/Coordinacion/ZonaDeJuego";
import Maestro from "./pages/Coordinacion/Maestro";
import Solicitudes from "./pages/Coordinacion/Solicitudes";
import DeporteCrear from "./pages/Coordinacion/Deportes/Crear";
import { createBrowserRouter } from "react-router-dom";
import Redirect from "./redirect";

import Estudiante from "./pages/Estudiante/estudiante";
import RolRoute from "./components/routes/RolRoute";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <PaginaPrincipal />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",

        element: <SignUp />,
      },
    ],
  },
  {
    path: "/maestro",
    element: <RolRoute rol={"MAESTRO"} />,
    children: [
      {
        index: true,
        element: <DashboardMaestro />,
      },
    ],
  },
  {
    path: "/coordinacion",
    element: <RolRoute rol="COORDINADOR" />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
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
        ],
      },
      {
        path: "zonadejuego",
        element: <ZonaDeJuego />,
      },
      {
        path: "maestros",
        element: <Maestro />,
      },
      {
        path: "solicitudes",
        element: <Solicitudes />,
      },
    ],
  },
  {
    path: "/estudiante",
    element: <RolRoute rol="ESTUDIANTE" />,
    children: [
      {
        index: true,
        element: <Estudiante />,
      },
    ],
  },
]);

export { router };
