import { useTranslation } from "react-i18next";
import Button from "../../../components/form/Button";

const Cta = () => {
  const { t } = useTranslation(["paginaPrincipal"]);
  return (
    <section className="bg-primary flex flex-col items-center gap-4 md:gap-8 text-center p-4">
      <h2 className="font-black text-3xl md:text-5xl     text-white ">{t("cta")}</h2>

      <div className="max-w-[170px] md:max-w-[240px] w-full">
        <Button textColor={"azul"} color={"blanco"}>
          <p className="text-xl">Empezar</p>
        </Button>
      </div>
    </section>
  );
};

export default Cta;
