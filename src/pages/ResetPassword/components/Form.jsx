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
import { useTranlate } from "src/hooks/useTranslation";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

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
  const { t } = useTranlate();
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
      titulo={t("HolaEstasListoParaJugar")}
      subtitulo={t("EnhorabuenaEstasAPocosPasosDeRecuperarTuContrasena")}
    >
      {registroExitoso && (
        <p className="font-bold text-green-500 ">
          {t("ContrasenaRestauradaCorrectamente")}.{" "}
          <span className="text-blue-500">
            {" "}
            {t("RedireccionandoAlFormulario")}
          </span>
        </p>
      )}
      {mensajeError && !registroExitoso && (
        <p className="font-bold text-red-500">{t("errors:" + mensajeError)}</p>
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
          label={t("Contrasena")}
          placeholder={t("IngreseSuContrasena")}
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
          label={t("ConfirmacionContrasena")}
          placeholder={t("IngreseSuContrasena")}
        />

        <div className="flex flex-col items-center gap-3 text-center">
          <Button disabled={isLoading} color={"azul"}>
            {t("CambiarContrasena")}
          </Button>
          <ButtonTranslate bg={"primary"} />
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
