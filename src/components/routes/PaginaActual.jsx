import { useState } from "react";
import { useOutlet } from "react-router-dom";
import { TranaslationProvider } from "src/context/Translate";

const PaginaActual = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

export default PaginaActual;
