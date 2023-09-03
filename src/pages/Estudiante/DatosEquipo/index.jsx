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
  const { isLoading, equipo, refetch } = useFetchId(id, obtenerUnEquipo, "equipo", miembrosEquipo);
  const navigate = useNavigate();

  const [copiado, setCopiado] = useState(false);

  useEffect(()=>{
    if(!isLoading && !equipo.id){
      navigate("/equipos");
    }
  },[])

  if (isLoading) return <PageLoader />


  const handleClick = async () => {
    await navigator.clipboard.writeText(import.meta.env.VITE_URLAPP+"/estudiante/equipos/unirse/"+equipo.token);

    setCopiado(true);
    setTimeout(() => {
      setCopiado(false)
    }, 2000);
  };

  return (
    <EstudianteLayaout
      title={equipo.nombre || "Error"}
      textButton={"Invitar jugadores"}
      onClickButton={handleClick}
    >
      <AlertaImprovisada open={copiado} setOpen={setCopiado} />
      <VistaEquipo equipo={equipo} actualizarDatos={refetch} />
    </EstudianteLayaout>
  );
};

const AlertaImprovisada = ({ open, setOpen }) => {
  //Para nada la robe de hypeorui
  return (
    <AnimatePresence>
      {
        open && <motion.div
          initial={{translateY: '100%', opacity: 0}}
          animate={{translateY: 0, opacity: 1}}
          exit={{translateY: '100%', opacity: 0}}
          transition={{duration: 0.4}}
          style={{translateX: '-50%'}}
          role="alert"
          class="rounded-xl border border-gray-100 bg-white p-4 shadow-xl fixed top-5 left-1/2 -translate-x-1/2"
        >
          <div class="flex items-start gap-4">
            <span class="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div class="flex-1">
              <strong class="block font-medium text-gray-900"> Invitacion Copiada </strong>

              <p class="mt-1 text-sm text-gray-700">
                En tus portapapeles tienes copiado el link con la invitacion !
              </p>
            </div>

            <button onClick={()=> setOpen(false)} class="text-gray-500 transition hover:text-gray-600">
              <span class="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default DatosEquipo;
