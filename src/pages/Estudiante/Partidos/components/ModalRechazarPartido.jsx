import { useModal } from "src/store/useModal";
import TemplateModal from "src/components/Modales/ModalTemplate";

import { useNavigate } from "react-router-dom";
import Button from "src/components/form/Button";
import { cancelarPartidoEstudiante } from "src/api/partidos";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Seguro que quieres rechazar la invitacion de este partido?</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => {
              const status = cancelarPartidoEstudiante(id);

              if (status) {
                toggleModal(false);
                navigate("/estudiante/exito", {
                  state: {
                    titulo: "Partido cancelado",
                    subtitulo: "Cancelacion del partido completada",
                    descripcion:
                      "Has rechazado la invitacion el partido correctamente",
                    url: `/estudiante/partidos`,
                    linkText: "Volver a partidos",
                  },
                });
              }
            }}
            color={"rojo"}
          >
            Rechazar
          </Button>
        </div>
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
