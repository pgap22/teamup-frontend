import { useModal } from "../../../store/useModal";
import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";
import { useTranlate } from "src/hooks/useTranslation";

import { abandonarEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useFetchClick } from "src/hooks/useFetchClick";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const { t } = useTranlate();
  
  const { isLoading, refetch, registroExitoso } = useFetchClick("abandonar_equipo", () => abandonarEquipo(id));

  useEffect(() => {
    if (registroExitoso) {
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
  }, [registroExitoso])
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("seguroAbandonarEquipo")}</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={refetch}
            color={"rojo"}
            disabled={isLoading}
          >
            <Skeleton loading={isLoading} fallback={<Loader />}>
               {t("abandonar")}
            </Skeleton>
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
