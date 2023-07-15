import React from "react";
import TablaAcciones from "./TablaAcciones";
import TablaDatoFila from "./TablaDatoFila";

const TablaListaDeFilas = ({ listaDatos, filas, editarUrl,borrarElemento }) => {
  return listaDatos.map((dato) => (
    <TablaDatoFila
      key={dato.ID+"-filadato"}
      filas={filas}
      datos={[...Object.values(dato), <TablaAcciones dato={dato} editarUrl={editarUrl} borrarElemento={borrarElemento} />]}
    />
  ));
};

export default TablaListaDeFilas;
