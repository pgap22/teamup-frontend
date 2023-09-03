import { useFormulario } from "../../../../../hooks/useFormulario";
import Input from "../../../../../components/form/Input";
import Button from "src/components/form/Button";
import { actualizarDatos } from "../../../../../api";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "src/hooks/useModal";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useIconPassword } from "src/hooks/useIconPassword";
import { LuEye } from "react-icons/lu";

const Preferencias = ({ equipo, actualizarDatos: actualizarEquipoDatos }) => {
  const {
    register,
    handleSubmit,
    mensajeError,
    setValue,
    registroExitoso,
    data,
    isLoading
  } = useFormulario(actualizarDatos);

  const navigate = useNavigate();

  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();


  useEffect(() => {
    setValue("id", equipo.id);
  }, []);

  useEffect(()=>{
    if(registroExitoso){
     actualizarEquipoDatos()
    }
  },[registroExitoso])

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
          type={mostrarPassword ? "text" : "password"}
          Icon={(props) => (
            <LuEye
              className="cursor-pointer select-none"
              onClick={mostrarOcultarPassword}
              {...props}
            />
          )}
          placeholder={"Contraseña"}
          register={register("new_password_access")}
        />
          <Button disabled={isLoading}>
            <Skeleton loading={isLoading} fallback={<Loader />}>
              Guardar
            </Skeleton>
          </Button>
      </form>


    </div>
  );
};
export default Preferencias;
