import Caja from "../../../../../components/ui/Cajas/Caja";
import ListaResumen from "./ListaResumen";

const Resumen = ({resumen = [], estadistica = {}}) => {
  return (
    <Caja titulo={"Resumen"}>
      <ListaResumen resumen={resumen} estadisticas={estadistica}/>
    </Caja>
  );
};

export default Resumen;
