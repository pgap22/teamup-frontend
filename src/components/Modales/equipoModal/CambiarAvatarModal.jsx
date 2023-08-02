import { useModal } from "../../../store/useModal";
import TemplateModal from "../ModalTemplate";

const ContentModal = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Aqui puedes cambiar el avatar que representa a tu equipo</h2>
      </div>
    </>
  );
};

const CambiarAvatarModal = ({}) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"CambiarAvatar"}
      desktopTitle={"Cambiar avatar del equipo"}
    >
      <ContentModal toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default CambiarAvatarModal;
