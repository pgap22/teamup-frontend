import Preferencias from "./Preferencias";
import Avatar from "./Avatar";
import Jugadores from "../Jugadores";

import Button from "../../../../../components/ui/Button";

import { miembrosEquipo } from "../../../../../helper/transformarDatos.jsx";
import { useModal } from "../../../../../store/useModal";

import EliminarEquipoModal from "../../../../../components/Modales/equipoModal/EliminarEquipo";

import HacerLiderModal from "src/components/Modales/equipoModal/HacerLider";
import EliminarMiembroModal from "src/components/Modales/equipoModal/EliminarMiembro";
import InvitarJugadoresModal from "src/components/Modales/equipoModal/InvitarJugadores";
import CambiarAvatarModal from "src/components/Modales/equipoModal/CambiarAvatarModal";

const VistaLider = ({ equipo }) => {
  const { id, avatar_url } = equipo;
  const { jugadores } = miembrosEquipo({ equipo });
  const { toggleModal } = useModal();

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="grid w-full h-auto grid-rows-2 gap-12 p-5 md:justify-between md:grid-cols-2 md:grid-rows-1">
        <Preferencias equipo={equipo} />
        <Avatar avatar_url={avatar_url} />
      </div>
      <Jugadores
        jugadores={jugadores}
        id_lider={equipo.id_lider}
        idEquipo={id}
      />
      <HacerLiderModal />
      <EliminarMiembroModal />
      <InvitarJugadoresModal />
      <EliminarEquipoModal id={equipo.id} />
      <CambiarAvatarModal />
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
