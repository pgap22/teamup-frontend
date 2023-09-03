import { Link, useNavigate } from "react-router-dom";

import FormLayout from "src/components/layout/FormLayout";

import Button from "src/components/form/Button";
import Input from "src/components/form/Input";
import { passwordRecovery } from "src/api";
import { useFormulario } from "src/hooks/useFormulario";
import { useEffect } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useTranlate } from "src/hooks/useTranslation";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

const Form = () => {
  const { t } = useTranlate(); // Obtiene la función t() para traducir
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
      titulo={t("TienesUnaMalaMemoria")}
      subtitulo={t("OlvidasteContrasena")}
    >
      {registroExitoso && (
        <p className="font-bold text-green-500 ">
          {t("InstruccionesCorreo")}{" "}
          <Link className="text-blue-500 " to={"/login"}>
            {t("RegresarAlFormulario")}
          </Link>
        </p>
      )}
      {mensajeError && !registroExitoso && (
        <p className="font-bold text-red-500">{t("errors:" + mensajeError)}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <Input
          register={register("email")}
          label={t("CorreoElectronico")}
          type="email"
          placeholder={t("IngreseSuCorreo")}
        />

        <div className="flex flex-col items-center gap-3 text-center">
          <Button disabled={isLoading} color={"azul"}>
            <Skeleton loading={isLoading} fallback={<Loader />}>
                   {t("Enviar")}
            </Skeleton>
          </Button>
          <Link to={"/login"} className="text-primary">
            {t("LaRecordaste")}
          </Link>
          <ButtonTranslate bg={"primary"} />
        </div>
      </form>
    </FormLayout>
  );
};

export default Form;
