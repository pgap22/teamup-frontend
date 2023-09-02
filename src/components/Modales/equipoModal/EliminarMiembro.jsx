import { useModal } from "../../../store/useModal";
import { useNavigate } from "react-router-dom";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { eliminarMiembro } from "../../../api";

import { datosJugador } from "src/store/datos_jugador";
import { useState } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useTranlate } from "src/hooks/useTranslation";

const ContentModal = ({ toggleModal }) => {
  const { id_equipo, id_usuarios, nombre } = datosJugador();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { t } = useTranlate();

  const eliminarClick = async () => {
    try {
      setLoading(true);
      const status = await eliminarMiembro(id_equipo, {
        id_usuarios: id_usuarios,
      });

      if (status) {
        toggleModal(false);
        navigate("/estudiante/exito", {
          state: {
            titulo: "miembroEliminado",
            subtitulo: "solicitudCompletadaExito",
            descripcion: `${nombre} ya no pertenece mas a tu equipo`,
            url: `/estudiante/equipos/datos/${id_equipo}`,
            linkText: "volverATuEquipo",
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
        <h2>{t("seguroEliminarMiembro") + nombre + "?"}</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button onClick={eliminarClick} disabled={loading} color={"rojo"}>
            <Skeleton loading={loading} fallback={<Loader />}>
              {t("eliminarEquipo")}
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

const EliminarMiembroModal = ({}) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"EliminarMiembroModal"}
      desktopTitle={"EliminarMiembro"}
    >
      <ContentModal toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default EliminarMiembroModal;
