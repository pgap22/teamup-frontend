import { useEffect, useState } from "react";
import FormLayout from "../../../components/layout/FormLayout";

import { Link, useNavigate, useParams } from "react-router-dom";
import { PageLoader } from "src/components/ui/PageLoader";
import { useTranlate } from "src/hooks/useTranslation";
import { verificarCorreo } from "src/api";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

const Form = () => {
  const { t } = useTranlate();
  const { token } = useParams();
  const navigate = useNavigate();
  const [first, setFirst] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setFirst(true);
  }, []);

  useEffect(() => {
    if (first) {
      (async () => {
        setIsLoading(true);
        try {
          await verificarCorreo({ token: token });
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [first]);

  if (isLoading) return <PageLoader />;

  return (
    <FormLayout titulo={t("titulo")} subtitulo={t("subtitulo")}>
      {error ? <Failed /> : <Exito />}
      <ButtonTranslate bg={"primary"} />
    </FormLayout>
  );
};

const Exito = () => {
  const { t } = useTranlate();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg font-bold">{t("congrats")}</p>
      <Link className="text-lg font-bold text-blue-500" to={"/login"}>
        {t("youcanlogin")}
      </Link>
    </div>
  );
};

const Failed = () => {
  const { t } = useTranlate();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg font-bold text-red-500">{t("error")}</p>
      <p className="text-lg text-red-500 font-regular">{t("error_token")}</p>
    </div>
  );
};

export default Form;
