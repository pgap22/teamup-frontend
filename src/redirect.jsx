import React, { useEffect } from "react";
import { useSession } from "./hooks/useSession";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const { usuario } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario.role == "COORDINADOR") {
      navigate("/coordinacion");
      return
    }
    if (usuario.role == "ESTUDIANTE") {
      navigate("/estudiante");
      return
    }
    if (usuario.role == "MAESTRO") {
      navigate("/maestro");
      return
    }

    navigate("/")
  }, [usuario]);

  return <div>Redirect</div>;
};

export default Redirect;
