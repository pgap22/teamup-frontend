import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/form/Input";
import Button from "../../../components/form/Button";
import { LuEye } from "react-icons/lu";
import FormLayout from "../../../components/layout/FormLayout";
import { useFormulario } from "../../../hooks/useFormulario";
import { iniciarSesion } from "../../../api";
import { useEffect } from "react";
import { useSession } from "../../../hooks/useSession";
import { useIconPassword } from "../../../hooks/useIconPassword";
import Skeleton from "src/components/ui/Skeleton";
import { HashLoader } from "react-spinners"

const Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, mensajeError, registroExitoso, data, isLoading } =
    useFormulario(iniciarSesion);

  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();

  const { t } = useTranslation(["login"]);
  const { login } = useSession();

  useEffect(() => {
    if (registroExitoso) {
      login(data);
      navigate("/redirect");
    }
  }, [registroExitoso]);

  return (
    <FormLayout titulo={t("titulo")} subtitulo={t("subtitulo")}>
      <p>{mensajeError}</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md gap-6"
      >
        <Input
          register={register("email")}
          type="email"
          label={"Correo Institucional"}
          placeholder={"Ingrese su correo institucional"}
        />
        <Input
          register={register("password")}
          type={mostrarPassword ? "text" : "password"}
          Icon={(props) => (
            <LuEye onClick={mostrarOcultarPassword} {...props} />
          )}
          label={"Contraseña"}
          placeholder={"Ingrese su contraseña"}
        />

        <div className="flex flex-col gap-3 text-center">
          <Button disabled={isLoading} color={"azul"}>
            <Skeleton loading={isLoading} fallback={<HashLoader size={24} color="white" />}>
              Iniciar Sesion
            </Skeleton>
          </Button>
          <Link to={"/signup"} className="text-primary">
            ¿ No tienes cuenta ?
          </Link>
          <Link to={"/recover"} className="text-primary">
            ¿ Olvidaste tu contraseña ?
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
