import { useModal } from "../../../store/useModal";
import { useFormulario } from "../../../hooks/useFormulario";

import Input from "../../form/Input";
import Button from "src/components/form/Button";
import TemplateModal from "../ModalTemplate";

import { unirseEquipo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";

import {HashLoader} from "react-spinners"

const FormUniseEquipo = ({ toggleModal }) => {
  const navigate = useNavigate();
  const { data, register, handleSubmit, mensajeError, registroExitoso, isLoading } =
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
        <Button disabled={isLoading}>
          <Skeleton loading={isLoading} fallback={<HashLoader size={28} color="white" />}>
            Unirse Equipo
          </Skeleton>
        </Button>
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
