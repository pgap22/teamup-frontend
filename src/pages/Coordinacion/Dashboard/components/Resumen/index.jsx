import { useTranlate } from "src/hooks/useTranslation";
import Caja from "../../../../../components/ui/Cajas/Caja";
import ListaResumen from "./ListaResumen";

const Resumen = ({ resumen = [], estadistica = {} }) => {
  const { t } = useTranlate();
  return (
    <Caja titulo={t("resumen")}>
      <ListaResumen resumen={resumen} estadisticas={estadistica} />
    </Caja>
  );
};

export default Resumen;
