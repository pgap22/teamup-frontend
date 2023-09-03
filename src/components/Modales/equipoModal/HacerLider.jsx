import { useModal } from "../../../store/useModal";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { HacerLider } from "../../../api";
import { useNavigate } from "react-router-dom";
import { datosJugador } from "src/store/datos_jugador";
import { useEffect } from "react";
import { useFetchClick } from "src/hooks/useFetchClick";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const ContentModal = ({ toggleModal }) => {
  const { id_equipo, id_usuarios, nombre } = datosJugador();
  const {isLoading, registroExitoso, refetch} = useFetchClick("liderEquipo", HacerLider(id_equipo, { id_lider: id_usuarios }));

  const navigate = useNavigate();
  useEffect(()=>{
    if (registroExitoso) {
      toggleModal(false);
      navigate("/estudiante/exito", {
        state: {
          titulo: "Solicitud completada",
          subtitulo: "Cambio de lider",
          descripcion: `${nombre} es el nuevo lider del equipo te has convertido en un miebro`,
          url: `/estudiante/equipos/datos/${id_equipo}`,
          linkText: "Volver al equipo",
        },
      });
    }
  },[registroExitoso])
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>Estas seguro que <span className="font-bold">{nombre}</span> sea el nuevo lider del grupo?</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button disabled={isLoading} onClick={refetch} color={"verde"}>
            <Skeleton loading={isLoading} fallback={<Loader />}>
                Aceptar
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

const HacerLiderModal = ({ id, nombre, idEquipo }) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"HacerLider"}
      desktopTitle={"Cambiar de lider"}
    >
      <ContentModal
        toggleModal={toggleModal}
        id={id}
        idEquipo={idEquipo}
        nombre={nombre}
      />
    </TemplateModal>
  );
};

export default HacerLiderModal;
