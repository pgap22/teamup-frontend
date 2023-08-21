import { useFormulario } from "../../../../../hooks/useFormulario";
import Input from "../../../../../components/form/Input";
import Button from "src/components/form/Button";
import { actualizarDatos } from "../../../../../api";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "src/hooks/useModal";

const Preferencias = ({ equipo }) => {
  const {
    register,
    handleSubmit,
    mensajeError,
    setValue,
    registroExitoso,
    data,
  } = useFormulario(actualizarDatos);

  const navigate = useNavigate();

  useEffect(() => {
    setValue("id", equipo.id);
  }, []);

  useEffect(() => {
    if (registroExitoso) {
      navigate("/estudiante/exito", {
        state: {
          titulo: "Datos actualizados",
          subtitulo: "Preferencias de equipo",
          descripcion: "Has actualizado los datos del equipo correctamente",
          url: `/estudiante/equipos/datos/${data.data.id}`,
          linkText: "Volver al equipo",
        },
      });
    }
  }, [registroExitoso]);

  return (
    <div className="flex flex-col items-center gap-5 md:items-start ">
      <h1 className="text-[#828282] text-4xl font-bold">Preferencias</h1>
      {mensajeError && !registroExitoso && (
        <p className="text-red-500">{mensajeError}</p>
      )}

      {registroExitoso && <p className="text-green-500">Datos actualizados</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center max-w-xs gap-4 md:items-start"
      >
        <Input
          label={"Nombre del equipo"}
          type="text"
          placeholder={"Nombre del equipo"}
          register={register("nombre", { value: equipo.nombre })}
        />
        <Input
          label={"Nueva contraseña del equipo"}
          type="password"
          placeholder={"Contraseña"}
          register={register("new_password_access", {required: true})}
        />
          <Button>Guardar</Button>
      </form>


    </div>
  );
};
export default Preferencias;
