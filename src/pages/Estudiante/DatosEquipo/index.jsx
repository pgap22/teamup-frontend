import { useNavigate, useParams } from "react-router-dom";
import { useFetchId } from "../../../hooks/useFetchId";
import { obtenerUnEquipo } from "../../../api";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import VistaLider from "./Components/VistaLider/VistaLider";
import VistaMiembro from "./Components/VistaMiembro/VistaMiembro";
import { useSession } from "src/hooks/useSession";
import { miembrosEquipo } from "src/helper/transformarDatos";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PageLoader } from "src/components/ui/PageLoader";
import { useTranlate } from "src/hooks/useTranslation";

const VistaEquipo = ({ equipo, actualizarDatos }) => {
  const rango = equipo.rango;
  const err = equipo.error;
  const View = () => {
    if (rango === "Lider") return <VistaLider actualizarDatos={actualizarDatos} equipo={equipo} />;
    if (rango === "Miembro") return <VistaMiembro equipo={equipo} />;
    return err ? <p>{err}</p> : <p>Error desconocido</p>;
  };

  return <View />;
};

const DatosEquipo = () => {
  const { id } = useParams();
  const { isLoading, equipo } = useFetchId(
    id,
    obtenerUnEquipo,
    "equipo",
    miembrosEquipo
  );
  const navigate = useNavigate();
  const { t } = useTranlate();

  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!isLoading && !equipo.id) {
      navigate("/equipos");
    }
  }, []);

  if (isLoading) return <PageLoader />


  const handleClick = async () => {
    await navigator.clipboard.writeText(
      import.meta.env.VITE_URLAPP + "/estudiante/equipos/unirse/" + equipo.token
    );

    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <EstudianteLayaout
      title={equipo.nombre || "Error"}
      textButton={t("invitarJugadores")}
      onClickButton={handleClick}
    >
      <AlertaImprovisada open={copiado} setOpen={setCopiado} />
      <VistaEquipo equipo={equipo} actualizarDatos={refetch} />
    </EstudianteLayaout>
  );
};

const AlertaImprovisada = ({ open, setOpen }) => {
  const { t } = useTranlate();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ translateY: "100%", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: "100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ translateX: "-50%" }}
          role="alert"
          className="fixed p-4 -translate-x-1/2 bg-white border border-gray-100 shadow-xl rounded-xl top-5 left-1/2"
        >
          <div className="flex items-start gap-4">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">
                {t("invitacionCopiada")}
              </strong>

              <p className="mt-1 text-sm text-gray-700">
                {t("enPortapapeles")}
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 transition hover:text-gray-600"
            >
              <span className="sr-only">{t("dismissPopup")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DatosEquipo;
