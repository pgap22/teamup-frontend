import { useModal } from "../../../store/useModal";
import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { abandonarEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useTranlate } from "src/hooks/useTranslation";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const { t } = useTranlate();

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("seguroAbandonarEquipo")}</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={async () => {
              const status = await abandonarEquipo(id);

              if (status) {
                toggleModal(false);
                navigate("/estudiante/exito", {
                  state: {
                    titulo: "salirDelGrupo",
                    subtitulo: "hasSalidoDelGrupo",
                    descripcion: "salirExitosamente",
                    url: `/estudiante/equipos`,
                    linkText: "volverATusEquipos",
                  },
                });
              }
            }}
            color={"rojo"}
          >
            {t("abandonar")}
          </Button>
          <Button
            onClick={() => {
              toggleModal(false);
            }}
            color={"blanco"}
          >
            {t("cancelar")}
          </Button>
        </div>
      </div>
    </>
  );
};

const AbandonarEquipoModal = ({ id }) => {
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  return (
    <TemplateModal
      identificator={"AbandonarEquipo"}
      desktopTitle={t("salirDelGrupo")}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default AbandonarEquipoModal;
