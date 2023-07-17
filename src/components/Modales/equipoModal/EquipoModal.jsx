import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Input from "../../form/Input";
import Button from "../../ui/Button";
import TemplateModal from "../ModalTemplate";

import { crearEquipo } from "../../../api";

const FormCrearEquipo = () => {
  const { register, handleSubmit, mensajeError, registroExitoso } =
    useFormulario(crearEquipo);

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
        <Button
          disabled={registroExitoso}
          type={"s"}
          px={50}
          textButton={"Crear equipo"}
          onClickButton={() => {}}
        />
      </form>
    </>
  );
};

const EquipoModal = () => {
  const { modalState, toggleModal } = useModal();

  return (
    <TemplateModal
      modalState={modalState}
      toggleModal={toggleModal}
      desktopTitle={"Crear equipo"}
    >
      <FormCrearEquipo />
    </TemplateModal>
  );
};

export default EquipoModal;
