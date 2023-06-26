import Box from "./Box";
import BoxText from "./BoxText";
import { useTranslation } from "react-i18next";

const SportBoxes = () => {
  const { t } = useTranslation(["paginaPrincipal"]);

  return (
    <section className="flex flex-col items-center gap-12 my-8 p-2">
      <Box>
        <img src="./soccer.svg" alt="Siluta de persona jugando futbol" />
        <BoxText
          titulo={t("futbol_titulo")}
          descripcion={t("futbol_descripcion")}
        />
      </Box>
      <Box invert>
        <img src="./bkb.svg" alt="Siluta de persona jugando futbol" />
        <BoxText
          titulo={t("futbol_titulo")}
          descripcion={t("futbol_descripcion")}
        />
      </Box>
      <Box>
        <img src="./volley.svg" alt="Siluta de persona jugando futbol" />
        <BoxText
          titulo={t("futbol_titulo")}
          descripcion={t("futbol_descripcion")}
        />
      </Box>
    </section>
  );
};

export default SportBoxes;
