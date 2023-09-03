import React from "react";
import { useModal } from "src/store/useModal";
import TemplateModal from "src/components/Modales/ModalTemplate";
import { useNavigate } from "react-router-dom";
import Button from "src/components/form/Button";
import { useTranlate } from "src/hooks/useTranslation";

import { cancelarPartidoEstudiante } from "src/api/partidos";
import { useFetchClick } from "src/hooks/useFetchClick";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useEffect } from "react";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const { t } = useTranlate();
  const { registroExitoso, refetch, isLoading } = useFetchClick("rechazarPartido", () => cancelarPartidoEstudiante(id));

  useEffect(() => {
    if (registroExitoso) {
      toggleModal(false);
      navigate("/estudiante/exito", {
        state: {
          titulo: "partidoCancelado",
          subtitulo: "cancelacionPartidoCompletada",
          descripcion: "rechazoInvitacionCorrectamente",
          url: `/estudiante/partidos`,
          linkText: "volverAPartidos",
        },
      });
    }
  }, [registroExitoso])
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("confirmarRechazarInvitacion")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={refetch}
            disabled={isLoading}
            color={"rojo"}
          >
            <Skeleton loading={isLoading} fallback={<Loader />}>
            {t("rechazar")}
            </Skeleton>
          </Button>
        </div>
      </div>
    </>
  );
};

const ModalRechazarPartido = ({ id = 2 }) => {
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  return (
    <TemplateModal
      identificator={"RechazarInvitacion"}
      desktopTitle={t("rechazarInvitacion")}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default ModalRechazarPartido;
