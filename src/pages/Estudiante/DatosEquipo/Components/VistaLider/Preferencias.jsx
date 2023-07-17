import { useFormulario } from "../../../../../hooks/useFormulario";
import Input from "../../../../../components/form/Input";
import Button from "../../../../../components/ui/Button";

const Preferencias = () => {
  const { register, handleSubmit, mensajeError, registroExitoso, data } =
    useFormulario();

  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-[#828282] text-4xl font-bold">Preferencias</h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 flex-col max-w-xs items-start"
      >
        <Input
          label={"Nombre del equipo"}
          type="text"
          placeholder={"Juanito's team"}
          register={register("nombre")}
        />
        <Input
          label={"Antigua contraseña del equipo"}
          type="password"
          placeholder={"Contraseña"}
          register={register("password_access")}
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
