import { useSession } from "../../hooks/useSession"

const ProtectedRoute = ({children}) => {
  
  const {usuario} = useSession();

  if(!usuario.id) return <p>No estas logeado</p>

  return children
}

export default ProtectedRoute