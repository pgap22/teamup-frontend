import { Link, useLocation } from "react-router-dom";
import EstudianteLayaout from "../layout/EstudianteLayout";
import Caja from "src/components/ui/Cajas/Caja";

const Exito = () => {
  const location = useLocation();
  if (!location.state) {
    return <div>Error</div>;
  }

  const { titulo, subtitulo, descripcion, url, linkText } = location.state;
  console.log(location.state);

  return (
    <EstudianteLayaout title={titulo}>
      <Caja titulo={subtitulo}>
        <p>{descripcion}</p>
        <Link className="text-primary underline" to={url}>
          {linkText}
        </Link>
      </Caja>
    </EstudianteLayaout>
  );
};

export default Exito;
