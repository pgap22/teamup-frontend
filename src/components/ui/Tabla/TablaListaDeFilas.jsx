import TablaAcciones from "./TablaAcciones";
import TablaDatoFila from "./TablaDatoFila";

const TablaListaDeFilas = ({ listaDatos, filas, editarUrl, borrarElemento, acciones, AccionesCustomElement, eliminar, editar }) => {
  return listaDatos.map((dato) => {

    if (acciones) {
      return <TablaDatoFila
        key={dato.ID + "-filadato"}
        filas={filas}
        datos={[...Object.values(dato), <TablaAcciones dato={dato} editarUrl={editarUrl} borrarElemento={borrarElemento} eliminar={eliminar} editar={editar}/>]}
      />
    }

    if (!acciones && !AccionesCustomElement) {
      return <TablaDatoFila
        key={dato.ID + "-filadato"}
        filas={filas}
        datos={[...Object.values(dato)]}
      />
    }

    if (AccionesCustomElement) {
      return <TablaDatoFila
        key={dato.ID + "-filadato"}
        filas={filas}
        datos={[...Object.values(dato), <AccionesCustomElement dato={dato} editarUrl={editarUrl} borrarElemento={borrarElemento}  />]}
      />
    }

  });
};

export default TablaListaDeFilas;
