import RolRoute from "../../components/routes/RolRoute";
import Estudiante from "../../pages/Estudiante/estudiante";

const routes = {
  path: "/estudiante",
  element: <RolRoute rol="ESTUDIANTE" />,
  children: [
    {
      index: true,
      element: <Estudiante />,
    },
  ],
}

export default routes;