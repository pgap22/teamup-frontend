import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/form/Input";
import Button from "../../../components/form/Button";
import { LuEye } from "react-icons/lu";
import FormLayout from "../../../components/layout/FormLayout";
import { useFormulario } from "../../../hooks/useFormulario";
import { iniciarSesion } from "../../../api";
import { useSession } from "../../../hooks/useSession";
import { useIconPassword } from "../../../hooks/useIconPassword";
import Skeleton from "src/components/ui/Skeleton";
import { HashLoader } from "react-spinners";
import { useTranlate } from "src/hooks/useTranslation";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

const Form = () => {
  const { t } = useTranlate();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    mensajeError,
    registroExitoso,
    data,
    isLoading,
  } = useFormulario(iniciarSesion);

  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();
  const { login } = useSession();

  useEffect(() => {
    if (registroExitoso) {
      login(data);
      navigate("/redirect");
    }
  }, [registroExitoso]);

  return (
    <FormLayout titulo={t("titulo")} subtitulo={t("subtitulo")}>
      <p className="font-bold text-red-500">{t("errors:" + mensajeError)}</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md gap-6"
      >
        <Input
          register={register("email")}
          type="email"
          label={t("correoLabel")}
          placeholder={t("correoPlaceholder")}
        />
        <Input
          register={register("password")}
          type={mostrarPassword ? "text" : "password"}
          Icon={(props) => (
            <LuEye onClick={mostrarOcultarPassword} {...props} />
          )}
          label={t("contrasenaLabel")}
          placeholder={t("contrasenaPlaceholder")}
        />

        <div className="flex flex-col items-center gap-3 text-center">
          <Button disabled={isLoading} color={"azul"}>
            <Skeleton
              loading={isLoading}
              fallback={<HashLoader size={24} color="white" />}
            >
              {t("iniciarSesion")}
            </Skeleton>
          </Button>
          <Link to={"/signup"} className="text-primary">
            {t("noTienesCuenta")}
          </Link>
          <Link to={"/recover"} className="text-primary">
            {t("olvidasteContrasena")}
          </Link>
          <ButtonTranslate bg={"primary"} />
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
