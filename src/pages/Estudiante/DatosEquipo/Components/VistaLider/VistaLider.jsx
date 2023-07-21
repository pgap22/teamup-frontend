import Preferencias from "./Preferencias";
import Avatar from "./Avatar";
import Jugadores from "../Jugadores";
import Button from "../../../../../components/ui/Button";
import EliminarEquipoModal from "../../../../../components/Modales/equipoModal/EliminarEquipo";
import { miembrosEquipo } from "../../../../../helper/transformarDatos.jsx";

import { useModal } from "../../../../../store/useModal";

const VistaLider = ({ equipo }) => {
  const { avatar_url } = equipo;

  const { jugadores } = miembrosEquipo({ equipo });

  const { toggleModal } = useModal();

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="grid w-full h-auto md:justify-between md:grid-cols-2 p-5 md:grid-rows-1 grid-rows-2 gap-12">
        <Preferencias equipo={equipo} />
        <Avatar avatar_url={avatar_url} />
      </div>
      <Jugadores jugadores={jugadores} id_lider={equipo.id_lider} />
      <EliminarEquipoModal id={equipo.id} />
      <Button
        textButton={"Eliminar equipo"}
        onClickButton={() => {
          toggleModal("EliminarEquipo");
        }}
        px={50}
        bgColor="#DE2B2B"
        type={"button"}
      />
    </div>
  );
};

export default VistaLider;
