import { useModal } from "../../../store/useModal";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { abandonarEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Seguro abandonar este equipo ?</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => {
              const status = abandonarEquipo(id);

              if (status) {
                toggleModal(false);
                navigate("/estudiante/exito", {
                  state: {
                    titulo: "Saliste del grupo",
                    subtitulo: "Has salido del grupo",
                    descripcion: "Has salido del grupo correctamente",
                    url: `/estudiante/equipos`,
                    linkText: "Volver a tus equipos",
                  },
                });
              }
            }}
            color={"rojo"}
          >
            Abandonar
          </Button>
          <Button
            onClick={() => {
              toggleModal(false);
            }}
            color={"blanco"}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
};

const AbandonarEquipoModal = ({ id }) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"AbandonarEquipo"}
      desktopTitle={"Eliminar equipo"}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default AbandonarEquipoModal;
