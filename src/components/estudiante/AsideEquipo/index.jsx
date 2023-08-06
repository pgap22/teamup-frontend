import { AiOutlinePlus } from "react-icons/ai";

import { useModal } from "src/store/useModal";
import { useFetch } from "src/hooks/useFetch";
import { obtenerEquiposDelUsuario } from "src/api";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";

const EquipoItem = ({ equipo }) => {
  const { avatar_url, nombre, id } = equipo;
  return (
    <Link
      to={`/estudiante/equipos/datos/${id}`}
      className="flex items-center w-full gap-2 px-4 mx-auto"
    >
      <Avatar avatar_url={avatar_url} h={48} w={48} />
      <h1 className="text-xl truncate">{nombre}</h1>
    </Link>
  );
};

export const Equipos = ({}) => {
  const { isLoading, equipos } = useFetch("equipos", obtenerEquiposDelUsuario);

  return equipos?.map((equipo) => {
    return <EquipoItem key={equipo.id} equipo={equipo} />;
  });
};

export const IconButtonEquipos = ({}) => {
  const { toggleModal } = useModal();
  return (
    <div
      className="p-2 rounded-full cursor-pointer bg-primary"
      onClick={() => {
        toggleModal("CrearEquipo");
      }}
    >
      <AiOutlinePlus color="white" />
    </div>
  );
};
