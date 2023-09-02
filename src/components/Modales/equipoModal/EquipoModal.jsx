import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Input from "../../form/Input";
import Button from "src/components/form/Button";
import TemplateModal from "../ModalTemplate";

import { crearEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "src/components/ui/Loader";
import Skeleton from "src/components/ui/Skeleton";
import { useTranlate } from "src/hooks/useTranslation";

const FormCrearEquipo = ({ toggleModal }) => {
  const navigate = useNavigate();
  const {
    data,
    register,
    handleSubmit,
    mensajeError,
    registroExitoso,
    isLoading,
  } = useFormulario(crearEquipo);
  const { t } = useTranlate();

  useEffect(() => {
    if (registroExitoso) {
      const { id } = data.data;
      toggleModal(false);
      navigate(`/estudiante/equipos/datos/${id}`);
    }
  }, [registroExitoso]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center gap-3 p-5"
      >
        {mensajeError && !registroExitoso && (
          <p className="text-red-500">{t("errors:" + mensajeError)}</p>
        )}
        {registroExitoso && (
          <p className="text-green-500">{t("equipoCreado")}</p>
        )}
        <Input
          placeholder={t("nombreEquipoPlaceholder")}
          label={t("nombreEquipoLabel")}
          type="text"
          register={register("nombre")}
        />
        <Input
          placeholder={t("contrasenaEquipoPlaceholder")}
          label={t("contrasenaEquipoLabel")}
          type="password"
          register={register("password_access")}
        />
        <Button disabled={isLoading}>
          <Skeleton loading={isLoading} fallback={<Loader />}>
            {t("crearEquipo")}
          </Skeleton>
        </Button>
      </form>
    </>
  );
};

const EquipoModal = () => {
  const { modalState, toggleModal } = useModal();
  const { t } = useTranlate();
  return (
    <TemplateModal
      desktopTitle={t("crearEquipo")}
      identificator={"CrearEquipo"}
    >
      <FormCrearEquipo toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default EquipoModal;
