import { useModal } from "src/store/useModal";
import TemplateModal from "src/components/Modales/ModalTemplate";

import { useNavigate } from "react-router-dom";
import { cancelarPartidoEstudiante } from "src/api/partidos";
import Button from "src/components/form/Button";
import { useFetchClick } from "src/hooks/useFetchClick";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const ContentModal = ({ toggleModal, id }) => {
  const navigate = useNavigate();
  const {refetch, registroExitoso, isLoading} = useFetchClick("cancelarPartido", ()=> cancelarPartidoEstudiante(id) );
  useEffect(()=>{
    if (registroExitoso) {
      toggleModal(false);
      navigate("/estudiante/exito", {
        state: {
          titulo: "Partido cancelado",
          subtitulo: "Cancelacion del partido completada",
          descripcion: "Has cancelado el partido correctamente",
          url: `/estudiante/partidos`,
          linkText: "Volver a partidos",
        },
      });
    }
  },[registroExitoso])
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Seguro que quieres cancelar este partido ?</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={refetch}
            disabled={isLoading}
            color={"rojo"}
          >
            <Skeleton loading={isLoading} fallback={<Loader />}>
              Cancelar
            </Skeleton>
          </Button>
        </div>
      </div>
    </>
  );
};

const CancelarPartidoModal = ({ id = 2 }) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"CancelarPartido"}
      desktopTitle={"Cancelar partido"}
    >
      <ContentModal toggleModal={toggleModal} id={id} />
    </TemplateModal>
  );
};

export default CancelarPartidoModal;
