import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { eliminarEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useState } from "react";

const ContentModal = ({ toggleModal, id }) => {
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
            titulo: "Equipo eliminado",
            subtitulo: "Eliminacion del equipo completada",
            descripcion: "Has eliminado el equipo correctamente",
            url: `/estudiante/equipos`,
            linkText: "Volver a tus equipos",
          },
        });
      }
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Seguro que quieres eliminar este equipo ?</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={eliminarClick}
            disabled={loading}
            color={"rojo"}
          >
            <Skeleton loading={loading} fallback={<Loader />}>
              Eliminar
            </Skeleton>
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

const EliminarEquipoModal = ({ id }) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"EliminarEquipo"}
      desktopTitle={"Eliminar equipo"}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default EliminarEquipoModal;
