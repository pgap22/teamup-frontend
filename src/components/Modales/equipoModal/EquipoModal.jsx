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


const FormCrearEquipo = ({ toggleModal }) => {
  const navigate = useNavigate();
  const { data, register, handleSubmit, mensajeError, registroExitoso, isLoading } =
    useFormulario(crearEquipo);

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
          <p className="text-red-500">{mensajeError}</p>
        )}
        {registroExitoso && (
          <p className="text-green-500">Equipo creado correctamente</p>
        )}
        <Input
          placeholder={"Ingresa el nombre del equipo"}
          label="Nombre del equipo"
          type="text"
          register={register("nombre")}
        />
        <Input
          placeholder={"Ingresa la contraseña del equipo"}
          label="Contraseña del equipo"
          type="password"
          register={register("password_access")}
        />
        <Button disabled={isLoading}>
          <Skeleton loading={isLoading} fallback={<Loader />}>
            Crear Equipo
          </Skeleton>
        </Button>
      </form>
    </>
  );
};

const EquipoModal = () => {
  const { modalState, toggleModal } = useModal();

  return (
    <TemplateModal desktopTitle={"Crear equipo"} identificator={"CrearEquipo"}>
      <FormCrearEquipo toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default EquipoModal;
