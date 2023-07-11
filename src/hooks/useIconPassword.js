import { useState } from "react";

const useIconPassword = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const mostrarOcultarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return { mostrarOcultarPassword, mostrarPassword };
};

export {useIconPassword}