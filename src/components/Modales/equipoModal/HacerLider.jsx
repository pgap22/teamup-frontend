import { useModal } from "../../../store/useModal";

import Button from "../../form/Button.jsx";
import TemplateModal from "../ModalTemplate";

import { HacerLider } from "../../../api";
import { useNavigate } from "react-router-dom";
import { datosJugador } from "src/store/datos_jugador";
import { useTranlate } from "src/hooks/useTranslation";

const ContentModal = ({ toggleModal }) => {
  const { id_equipo, id_usuarios, nombre } = datosJugador();

  const navigate = useNavigate();
  const { t } = useTranlate();

  const handleClick = async () => {
    try {
      const status = await HacerLider(id_equipo, { id_lider: id_usuarios });

      if (status) {
        toggleModal(false);
        navigate("/estudiante/exito", {
          state: {
            titulo: t("solicitudCompletada"),
            subtitulo: t("cambioLider"),
            descripcion: `${nombre} ${t("nuevoLider")}`,
            url: `/estudiante/equipos/datos/${id_equipo}`,
            linkText: t("volverAlEquipo"),
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h2>{t("seguroNuevoLider")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={handleClick} color={"verde"}>
            {t("aceptar")}
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

const HacerLiderModal = ({ id, nombre, idEquipo }) => {
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  return (
    <TemplateModal
      identificator={"HacerLider"}
      desktopTitle={t("cambiarLider")}
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
