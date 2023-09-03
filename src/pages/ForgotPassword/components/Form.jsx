import { Link, useNavigate } from "react-router-dom";

import FormLayout from "src/components/layout/FormLayout";

import Button from "src/components/form/Button";
import Input from "src/components/form/Input";
import { passwordRecovery } from "src/api";
import { useFormulario } from "src/hooks/useFormulario";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    mensajeError,
    registroExitoso,
    reset,
    isLoading,
  } = useFormulario(passwordRecovery);

  useEffect(() => {
    if (registroExitoso) {
      reset();
    }
  }, [registroExitoso]);

  return (
    <FormLayout
      titulo={"¿Tienes una mala memoria?"}
      subtitulo={
        "Acaso olvidaste tu contraseña no te preocupes aqui puedes tratar de recuperarla."
      }
    >
      {registroExitoso && (
        <p className="font-bold text-green-500 ">
          Le enviamos un correo con las instrucciones para reestablecer su
          contraseña.{" "}
          <Link className="text-blue-500 " to={"/login"}>
            Regresar al formulario
          </Link>
        </p>
      )}
      {mensajeError && !registroExitoso && (
        <p className="font-bold text-red-500">{mensajeError}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <Input
          register={register("email")}
          label={"Email"}
          type="email"
          placeholder={"Ingrese su correo electronico"}
        />

        <div className="flex flex-col gap-3 text-center">
          <Button disabled={isLoading} color={"azul"}>
            <Skeleton loading={isLoading} fallback={<Loader />}>
              Enviar
            </Skeleton>
          </Button>
          <Link to={"/login"} className="text-primary">
            ¿ La recordaste ?
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
