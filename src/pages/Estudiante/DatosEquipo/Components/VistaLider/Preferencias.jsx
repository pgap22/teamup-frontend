import { useFormulario } from "../../../../../hooks/useFormulario";
import Input from "../../../../../components/form/Input";
import Button from "../../../../../components/ui/Button";
import { actualizarDatos } from "../../../../../api";
import { useEffect } from "react";
import Exito from "../../../../../components/estudiante/Exito.jsx";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col gap-5 ">
      <h1 className="text-[#828282] text-4xl font-bold">Preferencias</h1>
      {mensajeError && !registroExitoso && (
        <p className="text-red-500">{mensajeError}</p>
      )}

      {registroExitoso && <p className="text-green-500">Datos actualizados</p>}

      <form
        onSubmit={handleSubmit}
        className="flex gap-4 flex-col max-w-xs items-start"
      >
        <Input
          label={"Nombre del equipo"}
          type="text"
          placeholder={"Nombre del equipo"}
          register={register("nombre", { value: equipo.nombre })}
        />
        <Input
          label={"Antigua contraseña del equipo"}
          type="password"
          placeholder={"Contraseña"}
          register={register("old_password_access")}
        />
        <Input
          label={"Nueva contraseña del equipo"}
          type="password"
          placeholder={"Contraseña"}
          register={register("new_password_access")}
        />
        <Button
          textButton={"Guardar"}
          onClickButton={() => {}}
          px={50}
          type={"s"}
        />
      </form>
    </div>
  );
};
export default Preferencias;
