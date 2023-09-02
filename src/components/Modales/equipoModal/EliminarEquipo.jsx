import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { eliminarEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useState } from "react";
import { useTranlate } from "src/hooks/useTranslation";

const ContentModal = ({ toggleModal, id, t }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const eliminarClick = async () => {
    try {
      setLoading(true);
      const status = await eliminarEquipo(id);

      if (status) {
        toggleModal(false);
        navigate("/estudiante/exito", {
          state: {
            titulo: t("equipoEliminado"),
            subtitulo: t("eliminacionEquipoCompletada"),
            descripcion: t("hasEliminadoEquipoCorrectamente"),
            url: `/estudiante/equipos`,
            linkText: t("volverATusEquipos"),
          },
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("seguroEliminarEquipo")}</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button onClick={eliminarClick} disabled={loading} color={"rojo"}>
            <Skeleton loading={loading} fallback={<Loader />}>
              {t("eliminar")}
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

const EliminarEquipoModal = ({ id }) => {
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  return (
    <TemplateModal
      identificator={"EliminarEquipo"}
      desktopTitle={t("eliminarEquipo")}
    >
      <ContentModal toggleModal={toggleModal} id={id} t={t} />
    </TemplateModal>
  );
};

export default EliminarEquipoModal;
