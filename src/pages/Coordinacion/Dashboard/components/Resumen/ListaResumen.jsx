import React from "react";
import CajaEstadistica from "src/components/ui/Cajas/CajaEstadistica";
import Loader from "src/components/ui/Loader";

const ListaResumen = ({ resumen = [], estadisticas= {} }) => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {resumen.map((data) => (
        <CajaEstadistica
          key={data.titulo+"-stat"}
          titulo={data.titulo}
          Icon={data.icon}
          cantidad={estadisticas[data.key] ?? <Loader color="gray" />}
        />
      ))}
    </div>
  );
};

export default ListaResumen;
