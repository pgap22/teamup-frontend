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
import { useTranslation } from "react-i18next";
import { useTranlate } from "src/hooks/useTranslation";

const Preferencias = ({ equipo }) => {
  const {
    register,
    handleSubmit,
    mensajeError,
    setValue,
    registroExitoso,
    data,
    isLoading,
  } = useFormulario(actualizarDatos);

  const navigate = useNavigate();

  const { mostrarOcultarPassword, mostrarPassword } = useIconPassword();
  const { t } = useTranlate();

  useEffect(() => {
    setValue("id", equipo.id);
  }, []);

  useEffect(() => {
    if (registroExitoso) {
      navigate("/estudiante/exito", {
        state: {
          titulo: t("datosActualizados"),
          subtitulo: t("preferenciasEquipo"),
          descripcion: t("datosActualizadosDescripcion"),
          url: `/estudiante/equipos/datos/${data.data.id}`,
          linkText: t("volverAlEquipo"),
        },
      });
    }
  }, [registroExitoso]);

  return (
    <div className="flex flex-col items-center gap-5 md:items-start ">
      <h1 className="text-[#828282] text-4xl font-bold">
        {t("preferenciasEquipo")}
      </h1>{" "}
      {mensajeError && !registroExitoso && (
        <p className="text-red-500">{mensajeError}</p>
      )}
      {registroExitoso && (
        <p className="text-green-500">{t("datosActualizados")}</p>
      )}{" "}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center max-w-xs gap-4 md:items-start"
      >
        <Input
          label={t("nombreEquipo")}
          type="text"
          placeholder={t("nombreEquipoPlaceholder")}
          register={register("nombre", { value: equipo.nombre })}
        />
        <Input
          label={t("nuevaContraseñaEquipo")}
          type={mostrarPassword ? "text" : "password"}
          Icon={(props) => (
            <LuEye
              className="cursor-pointer select-none"
              onClick={mostrarOcultarPassword}
              {...props}
            />
          )}
          placeholder={t("contraseñaPlaceholder")}
          register={register("new_password_access")}
        />
        <Button disabled={isLoading}>
          <Skeleton loading={isLoading} fallback={<Loader />}>
            {t("guardar")} {/* Identificador para el botón de guardar */}
          </Skeleton>
        </Button>
      </form>
    </div>
  );
};
export default Preferencias;
