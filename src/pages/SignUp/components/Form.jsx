import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import FormLayout from "../../../components/layout/FormLayout";

import { Link, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";

import { useNivelesAcademicos } from "../hooks/useNivelesAcademicos";
import { useTranslation } from "react-i18next";
import { useFormulario } from "../../../hooks/useFormulario";
import { crearCuentaEstudiante } from "../../../api";
import { useIconPassword } from "../../../hooks/useIconPassword";

import { HashLoader } from "react-spinners";
import Skeleton from "src/components/ui/Skeleton";

const Form = () => {
  const navigate = useNavigate();
  const { nivelesAcademicos, isLoading, error } = useNivelesAcademicos();
  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();

  const { t } = useTranslation(["signup"]);
  const { register, handleSubmit, setValue, mensajeError, registroExitoso, isLoading: formLoading } =
    useFormulario(crearCuentaEstudiante);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un error, recarga la pagina</p>;
  if (registroExitoso) {
    navigate("/login");
  }

  return (
    <FormLayout titulo={t("titulo")} subtitulo={t("subtitulo")}>
      <p className="text-red-500 font-bold">{mensajeError}</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <Input
          register={register("nombre")}
          label={"Nombre"}
          placeholder={"Ingrese su nombre"}
        />
        <Input
          register={register("apellido")}
          label={"Apellido"}
          placeholder={"Ingrese su apellido"}
        />
        <Select
          valueLabel={"id_nivelAcademico"}
          setValue={setValue}
          label={"Nivel Academico"}
          placeholder={"Nivel academico"}
          opciones={nivelesAcademicos}
        />
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
            <LuEye
              className="cursor-pointer select-none"
              onClick={mostrarOcultarPassword}
              {...props}
            />
          )}
          label={"Contraseña"}
          placeholder={"Ingrese su contraseña"}
        />

        <div className="text-center flex flex-col gap-3">
          <Button disabled={formLoading} color={"azul"}>
            <Skeleton loading={formLoading} fallback={<HashLoader size={24} color="white" /> }>
              Registrate
            </Skeleton>
          </Button>
          <Link to={"/login"} className="text-primary">
            ¿ Ya tienes cuenta ?
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
