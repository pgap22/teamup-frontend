import { useModal } from "src/store/useModal";
import TemplateModal from "src/components/Modales/ModalTemplate";

import { useNavigate } from "react-router-dom";

const ContentModal = ({ toggleModal, id }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col gap-4 p-4">
                <h2>Seguro que quieres rechazar la invitacion de este partido?</h2>
            </div>
        </>
    );
};

const ModalRechazarPartido = ({ id = 2 }) => {
    const { toggleModal } = useModal();

    return (
        <TemplateModal
            identificator={"RechazarInvitacion"}
            desktopTitle={"Rechazar invitacion"}
        >
            <ContentModal toggleModal={toggleModal} id={id} />
        </TemplateModal>
    );
};

export default ModalRechazarPartido;
