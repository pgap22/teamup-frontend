import React from "react";
import TablaAcciones from "./TablaAcciones";
import TablaDatoFila from "./TablaDatoFila";

const TablaListaDeFilas = ({ listaDatos, filas }) => {
  return listaDatos.map((dato) => (
    <TablaDatoFila
      filas={filas}
      datos={[...Object.values(dato), <TablaAcciones />]}
    />
  ));
};

export default TablaListaDeFilas;
