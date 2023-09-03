import { useModal } from "src/store/useModal";
import TemplateModal from "src/components/Modales/ModalTemplate";

import { useNavigate } from "react-router-dom";
import { cancelarPartidoEstudiante } from "src/api/partidos";
import Button from "src/components/form/Button";
import { useTranlate } from "src/hooks/useTranslation";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const { t } = useTranlate();

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("confirmarCancelarPartido")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => {
              const status = cancelarPartidoEstudiante(id);

              if (status) {
                toggleModal(false);
                navigate("/estudiante/exito", {
                  state: {
                    titulo: t("partidoCancelado"),
                    subtitulo: t("cancelacionPartidoCompletada"),
                    descripcion: t("partidoCanceladoCorrectamente"),
                    url: `/estudiante/partidos`,
                    linkText: t("volverAPartidos"),
                  },
                });
              }
            }}
            color={"rojo"}
          >
            {t("cancelar")}
          </Button>
        </div>
      </div>
    </>
  );
};

const CancelarPartidoModal = ({ id = 2 }) => {
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  return (
    <TemplateModal
      identificator={"CancelarPartido"}
      desktopTitle={t("cancelarPartido")}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default CancelarPartidoModal;
