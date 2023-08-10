import Jugadores from "../Jugadores";
import Button from "../../../../../components/ui/Button.jsx";

import { useModal } from "../../../../../store/useModal";

import { miembrosEquipo } from "../../../../../helper/transformarDatos.jsx";
import AbandonarEquipoModal from "../../../../../components/Modales/equipoModal/AbandonarEquipo.jsx";

const VistaMiembro = ({ equipo }) => {
  const { toggleModal } = useModal();
  const { jugadores } = equipo;

  return (
    <div className="flex flex-col items-center gap-4 md:items-start">
      <Jugadores id_lider={equipo.lider.id}
        jugadores={jugadores} />
      <Button
        textButton={"Abandonar equipo"}
        onClickButton={() => {
          toggleModal("AbandonarEquipo");
        }}
        px={80}
        bgColor="#DE2B2B"
        type={"button"}
      />
      <AbandonarEquipoModal id={equipo.id} />
    </div>
  );
};

export default VistaMiembro;
