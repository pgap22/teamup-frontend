import { useModal } from "src/store/useModal";
import TemplateModal from "src/components/Modales/ModalTemplate";
import { useTranlate } from "src/hooks/useTranslation";

import { useNavigate } from "react-router-dom";
import { cancelarPartidoEstudiante } from "src/api/partidos";
import Button from "src/components/form/Button";
import { useFetchClick } from "src/hooks/useFetchClick";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const { t } = useTranlate();
  const {refetch, registroExitoso, isLoading} = useFetchClick("cancelarPartido", ()=> cancelarPartidoEstudiante(id) );
  useEffect(()=>{
    if (registroExitoso) {
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
  },[registroExitoso])
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("confirmarCancelarPartido")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={refetch}
            disabled={isLoading}
            color={"rojo"}
          >
            <Skeleton loading={isLoading} fallback={<Loader />}>
            {t("cancelar")}
            </Skeleton>
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
