import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Input from "../../form/Input";
import Button from "../../ui/Button";
import TemplateModal from "../ModalTemplate";

import { unirseEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FormUniseEquipo = ({ toggleModal }) => {
  const navigate = useNavigate();
  const { data, register, handleSubmit, mensajeError, registroExitoso } =
    useFormulario(unirseEquipo);

  useEffect(() => {
    if (registroExitoso) {
      const { id_equipo } = data.data;
      toggleModal(false);
      navigate(`/estudiante/equipos/datos/${id_equipo}`);
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
          <p className="text-green-500">Te has unido correctamente al equipo</p>
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
          textButton={"Unirse al equipo"}
          onClickButton={() => {}}
        />
      </form>
    </>
  );
};

const UnirseEquipoModal = () => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"UnirseEquipo"}
      desktopTitle={"Unirse a un equipo"}
    >
      <FormUniseEquipo toggleModal={toggleModal} />
    </TemplateModal>
  );
};

export default UnirseEquipoModal;
