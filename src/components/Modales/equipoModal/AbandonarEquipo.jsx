import { useModal } from "../../../store/useModal";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { abandonarEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useFetchClick } from "src/hooks/useFetchClick";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const { isLoading, refetch, registroExitoso } = useFetchClick("abandonar_equipo", () => abandonarEquipo(id));

  useEffect(() => {
    if (registroExitoso) {
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
  }, [registroExitoso])
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Seguro abandonar este equipo ?</h2>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={refetch}
            color={"rojo"}
            disabled={isLoading}
          >
            <Skeleton loading={isLoading} fallback={<Loader />}>
              Abandonar
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

const AbandonarEquipoModal = ({ id }) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"AbandonarEquipo"}
      desktopTitle={"Abandonar equipo"}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default AbandonarEquipoModal;
