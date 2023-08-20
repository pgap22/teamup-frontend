import { useTranslation } from "react-i18next";
import { useIconPassword } from "src/hooks/useIconPassword";

import Input from "src/components/form/Input";
import Button from "src/components/form/Button";
import FormLayout from "src/components/layout/FormLayout";

import { LuEye } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormulario } from "src/hooks/useFormulario";
import { changePassword } from "src/api";
import { useEffect } from "react";

const Form = () => {
  const navigate = useNavigate();
  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();
  const {
    register,
    setValue,
    mensajeError,
    registroExitoso,
    formState,
    data,
    reset,
    isLoading,
    handleSubmit,
  } = useFormulario(changePassword);
  const { t } = useTranslation(["resetPassword"]);
  const { token } = useParams();

  useEffect(() => {
    setValue("token", token);
  }, []);

  useEffect(() => {
    if (registroExitoso) {
      setTimeout(() => {
        navigate("/login");
      }, 800);
    }
  }, [registroExitoso]);

  return (
    <FormLayout
      titulo={t("Hola, estas listo para jugar?")}
      subtitulo={t(
        "Enhorabuena estas a pocos pasos de recuperar tu contraseña"
      )}
    >
      {registroExitoso && (
        <p className="font-bold text-green-500 ">
          Contraseña restaurada correctamente.{" "}
          <span className="text-blue-500">
            {" "}
            Redireccionando al formulario . . . .
          </span>
        </p>
      )}
      {mensajeError && !registroExitoso && (
        <p className="font-bold text-red-500">{mensajeError}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <Input
          register={register("password")}
          type={mostrarPassword ? "text" : "password"}
          Icon={(props) => (
            <LuEye
              className="cursor-pointer select-none"
              onClick={mostrarOcultarPassword}
              {...props}
            />
          )}
          label={"Contraseña"}
          placeholder={"Ingrese su contraseña"}
        />

        <Input
          register={register("confirm_password")}
          type={mostrarPassword ? "text" : "password"}
          Icon={(props) => (
            <LuEye
              className="cursor-pointer select-none"
              onClick={mostrarOcultarPassword}
              {...props}
            />
          )}
          label={"Confirmacion de contraseña"}
          placeholder={"Ingrese su contraseña"}
        />

        <div className="flex flex-col gap-3 text-center">
          <Button disabled={isLoading} color={"azul"}>
            Cambiar contraseña
          </Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
