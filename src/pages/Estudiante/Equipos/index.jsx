import EstudianteLayaout from "../../../components/layout/EstudianteLayout";
import TeamItems from "./Components/Equipos/TeamItems";

import { useModal } from "../../../store/useModal";
import { useFetch } from "../../../hooks/useFetch";

import { obtenerEquiposDelUsuario } from "../../../api";

const Equipos = () => {
  const { isLoading, equipos } = useFetch("equipos", obtenerEquiposDelUsuario);
  const { toggleModal } = useModal();

  if (isLoading) return <p>Cargando...</p>;
  return (
    <EstudianteLayaout
      textButton="Crear equipo"
      onClickButton={() => {
        toggleModal(true);
      }}
      title={"Equipos"}
    >
      <div className="flex flex-col w-full gap-5">
        <h1 className="text-[#828282] text-4xl font-bold">Tus equipos</h1>
        <TeamItems equipos={equipos} />
      </div>
    </EstudianteLayaout>
  );
};

export default Equipos;
