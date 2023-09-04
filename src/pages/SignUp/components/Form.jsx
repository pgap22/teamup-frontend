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
import { PageLoader } from "src/components/ui/PageLoader";
import { useTranlate } from "src/hooks/useTranslation";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

const Form = () => {
  const navigate = useNavigate();
  const { nivelesAcademicos, isLoading, error } = useNivelesAcademicos();
  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();

  const { t } = useTranlate();
  const {
    register,
    handleSubmit,
    setValue,
    mensajeError,
    registroExitoso,
    isLoading: formLoading,
  } = useFormulario(crearCuentaEstudiante);

  if (isLoading) return <PageLoader />;
  if (error) return <p>{t("Hubo un error, recarga la página")}</p>;
  if (registroExitoso) {
    navigate("/login");
  }

  return (
    <FormLayout titulo={t("titulo")} subtitulo={t("subtitulo")}>
      <p className="font-bold text-red-500">{t("errors:" + mensajeError)}</p>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <Input
          register={register("nombre")}
          label={t("nombreLabel")}
          placeholder={t("nombrePlaceholder")}
        />
        <Select
          valueLabel={"id_nivelAcademico"}
          setValue={setValue}
          label={t("nivelAcademicoLabel")}
          placeholder={t("nivelAcademicoPlaceholder")}
          opciones={nivelesAcademicos}
        />
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
            <LuEye
              className="cursor-pointer select-none"
              onClick={mostrarOcultarPassword}
              {...props}
            />
          )}
          label={t("contrasenaLabel")}
          placeholder={t("contrasenaPlaceholder")}
        />

        <div className="flex flex-col items-center gap-3 text-center">
          <Button disabled={formLoading} color={"azul"}>
            <Skeleton
              loading={formLoading}
              fallback={<HashLoader size={24} color="white" />}
            >
              {t("registrar")}
            </Skeleton>
          </Button>
          <div className="flex items-center justify-center w-full gap-3 mb-5">
            <ButtonTranslate bg={"primary"} />
            <Link to={"/login"} className="text-primary">
              {t("yaTienesCuenta")}
            </Link>
          </div>
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
