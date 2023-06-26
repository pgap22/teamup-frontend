import ListaResumen from "./ListaResumen";
import Caja from "../Cajas/Caja";

const Resumen = ({resumen = []}) => {
  return (
    <Caja titulo={"Resumen"}>
      <ListaResumen resumen={resumen} />
    </Caja>
  );
};

export default Resumen;
