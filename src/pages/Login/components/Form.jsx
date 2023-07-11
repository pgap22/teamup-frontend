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

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    mensajeError,
    registroExitoso,
    data,
  } = useFormulario(iniciarSesion);
  
  const {mostrarOcultarPassword, mostrarPassword} = useIconPassword();

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
        className="w-full max-w-md flex flex-col gap-6"
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

        <div className="text-center flex flex-col gap-3">
          <Button color={"azul"}>Iniciar Sesion</Button>
          <Link to={"/signup"} className="text-primary">
            ¿ No tienes cuenta ?
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
