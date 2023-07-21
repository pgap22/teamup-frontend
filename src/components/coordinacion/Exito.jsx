import { Link } from "react-router-dom";
import CoordinacionLayout from "src/components/layout/CoordinacionLayout";
import Caja from "src/components/ui/Cajas/Caja";

const Exito = ({ titulo, subtitulo, descripcion, url, linkText }) => {
  return (
    <CoordinacionLayout titulo={titulo}>
      <Caja titulo={subtitulo}>
        <p>{descripcion}</p>
        <Link className="text-primary underline" to={url}>
          {linkText}
        </Link>
      </Caja>
    </CoordinacionLayout>
  );
};

export default Exito;
