import { createContext, useEffect, useState } from "react";
import { obtenerPerfil } from "../api";
import Loader from "src/components/ui/Loader";
import { PageLoader } from "src/components/ui/PageLoader";
const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(true);

  const perfil = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await obtenerPerfil(token ?? "");
      setUsuario(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const login = (usuario)=>{
    setUsuario(usuario);
    localStorage.setItem("token", usuario.token)
  }
  const logout = ()=>{
    setUsuario({})
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  useEffect(() => {
    perfil();
  }, []);

  if (loading) return <PageLoader />;

  return (
    <SessionContext.Provider
      value={{
        usuario,
        login,
        logout
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};




export { SessionContext, SessionProvider };
