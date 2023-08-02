import { Link, useLocation } from "react-router-dom";
import EstudianteLayaout from "../layout/EstudianteLayout";
import Caja from "src/components/ui/Cajas/Caja";

const Exito = () => {
  const location = useLocation();
  const states = { ...location.state };

  if (!states) {
    return <div>Error</div>;
  }
  const { url, titulo, subtitulo, descripcion, linkText } = states;

  return (
    <EstudianteLayaout title={titulo}>
      <Caja titulo={subtitulo}>
        <p>{descripcion}</p>
        <Link className="underline text-primary" to={url}>
          {linkText}
        </Link>
      </Caja>
    </EstudianteLayaout>
  );
};

export default Exito;
