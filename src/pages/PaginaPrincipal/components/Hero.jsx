import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation(["paginaPrincipal"]);

  const hero = [
    "md:flex-row md:justify-between",
    "my-12 w-full text-center flex flex-col items-center gap-5"
  ]

  const heroInfo = [
    "lg:max-w-[700px]",
    "md:items-start md:text-start md:max-w-[500px]",
    "flex flex-col gap-3 items-center"
  ]

  const heroTitulo = [
    "lg:text-6xl",
    "md:text-5xl",
    "font-semibold text-4xl mb-4"
  ]

  return (
    <section className={clsx(hero)}>
      <div className={clsx(heroInfo)}>

        <h1 className={clsx(heroTitulo)}>{t("titulo")}</h1>

        <div className="md:mt-12">
          <p className="text-lg md:max-w-[520px]">{t("subtitulo")}</p>
          <button className="bg-white text-primary font-bold p-2 rounded-full px-8 mt-5">Empezar</button>      
        </div>
       </div>
      <img className="" src="/hero_icon.svg" alt="Imagen de deportes" />
    </section>
  );
};

export default Hero;
