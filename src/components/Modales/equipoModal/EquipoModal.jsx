import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Input from "../../form/Input";
import Button from "../../ui/Button";
import TemplateModal from "../ModalTemplate";

import { crearEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FormCrearEquipo = ({ toggleModal }) => {
  const navigate = useNavigate()
  const { data, register, handleSubmit, mensajeError, registroExitoso } =
    useFormulario(crearEquipo);

  useEffect(() => {
    if (registroExitoso) {
      const { id } = data.data
      setTimeout(() => {
        toggleModal(false)
        navigate(`/estudiante/equipos/${id}`)
      }, 1000)
    }
  }, [registroExitoso])

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
          onClickButton={() => { }}
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
      <FormCrearEquipo toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default EquipoModal;
