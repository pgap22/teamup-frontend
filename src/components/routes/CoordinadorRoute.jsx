import { Outlet } from "react-router-dom"
import { useSession } from "../../hooks/useSession"

const CoordinadorRoute = () => {
  const {usuario} = useSession();

  console.log(usuario);

  if(usuario.rol != "COORDINADOR") throw <p>No eres Coordinador</p>
  return <Outlet />
}

export default CoordinadorRoute