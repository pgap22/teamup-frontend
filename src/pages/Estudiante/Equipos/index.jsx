import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import TeamItems from "./Components/TeamItems";

import UnirseEquipoModal from "../../../components/Modales/equipoModal/UnirseEquipoModal";

import { useModal } from "../../../store/useModal";
import { useFetch } from "../../../hooks/useFetch";

import { obtenerEquiposDelUsuario } from "../../../api";
import Loader from "src/components/ui/Loader";
import { useTranlate } from "src/hooks/useTranslation";

const Equipos = () => {
  const { isLoading, equipos } = useFetch("equipos", obtenerEquiposDelUsuario);
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  if (isLoading) return <LoaderPage />;

  return (
    <EstudianteLayaout
      textButton={t("UnirseEquipo")}
      onClickButton={() => {
        toggleModal("UnirseEquipo");
      }}
      title={t("Equipos")}
    >
      <div className="flex flex-col w-full gap-5 ">
        <h1 className="text-[#828282] text-4xl font-bold">{t("TusEquipos")}</h1>
        <TeamItems equipos={equipos} />
      </div>
      <UnirseEquipoModal />
    </EstudianteLayaout>
  );
};


const LoaderPage = () => {
  return (
    <EstudianteLayaout
      title={"Equipos"}
    >
      <div className="flex flex-col w-full gap-5 ">
        <h1 className="text-[#828282] text-4xl font-bold">Tus equipos</h1>
        <div className="flex flex-col items-center gap-5 mt-4 md:flex-row">
            <p className="font-bold text-xl text-gray-400">Cargando tus equipos</p>
            <Loader color="blue" />      
        </div>
      </div>
    </EstudianteLayaout>
  )
}

export default Equipos;
