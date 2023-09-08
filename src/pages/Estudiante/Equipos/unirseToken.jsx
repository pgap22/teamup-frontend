import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { unirsePorToken } from "src/api/equipos";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción
import { PageLoader } from "src/components/ui/PageLoader";

const UnirseToken = () => {
  const { t } = useTranslation(); // Inicializa el hook de traducción
  const { token } = useParams();
  const navigate = useNavigate();
  const [first, setFirst] = useState(false);
  useEffect(() => {
    setFirst(true);
  }, []);

  useEffect(() => {
    if (first) {
      (async () => {
        try {
          const { data } = await unirsePorToken(token);
          navigate("/estudiante/exito", {
            state: {
              url: "/estudiante/equipos",
              titulo: "nuevoEquipo",
              subtitulo: "teAcabasDeUnirA",
              descripcion: "nuevoMiembroDelEquipo",
              linkText: "volver",
            },
          });
          return;
        } catch (error) {
          navigate("/estudiante/exito", {
            state: {
              url: "/estudiante/equipos",
              titulo: "tokenInvalido",
              subtitulo: "invitacionNoValida",
              descripcion: "verificarEnlace",
              linkText: "volver",
            },
          });
        }
      })();
    }
  }, [first]);

  return <>{<PageLoader />}</>;
};

export default UnirseToken;
