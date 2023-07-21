import Caja from "../../../../../components/ui/Cajas/Caja";
import ListaResumen from "./ListaResumen";

const Resumen = ({resumen = []}) => {
  return (
    <Caja titulo={"Resumen"}>
      <ListaResumen resumen={resumen} />
    </Caja>
  );
};

export default Resumen;
