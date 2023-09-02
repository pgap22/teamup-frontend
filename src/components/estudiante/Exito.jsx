import { Link, useLocation } from "react-router-dom";
import EstudianteLayaout from "../layout/EstudianteLayout";
import Caja from "src/components/ui/Cajas/Caja";
import { useTranlate } from "src/hooks/useTranslation";

const Exito = () => {
  const location = useLocation();
  const states = { ...location.state };
  const { t } = useTranlate();

  if (!states) {
    return <div>Error</div>;
  }
  const { url, titulo, subtitulo, descripcion, linkText } = states;

  return (
    <EstudianteLayaout title={t(titulo)}>
      <Caja titulo={t(subtitulo)}>
        <p>{t(descripcion)}</p>
        <Link className="underline text-primary" to={url}>
          {t(linkText)}
        </Link>
      </Caja>
    </EstudianteLayaout>
  );
};

export default Exito;
