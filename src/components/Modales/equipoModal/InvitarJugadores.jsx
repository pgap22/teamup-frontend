import { useModal } from "../../../store/useModal";
import TemplateModal from "../ModalTemplate";

const ContentModal = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Seguro que quieres eliminar a {nombre} del equipo ?</h2>
      </div>
    </>
  );
};

const InvitarJugadoresModal = ({}) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"InvitarJugadores"}
      desktopTitle={"Invitar Jugadores"}
    >
      <ContentModal toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default InvitarJugadoresModal;
