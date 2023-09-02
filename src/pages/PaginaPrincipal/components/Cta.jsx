import { useTranslation } from "react-i18next";
import Button from "../../../components/form/Button";
import { useTranlate } from "src/hooks/useTranslation";
import { Link } from "react-router-dom";

const Cta = () => {
  const { t } = useTranlate();
  return (
    <section className="flex flex-col items-center gap-4 p-4 text-center bg-primary md:gap-8">
      <h2 className="text-3xl font-black text-white md:text-5xl ">
        {t("cta")}
      </h2>

      <Link to={"/login"} className="max-w-[170px] md:max-w-[240px] w-full">
        <Button textColor={"azul"} color={"blanco"}>
          <p className="text-xl">{t("boton_cita")}</p>
        </Button>
      </Link>
    </section>
  );
};

export default Cta;
