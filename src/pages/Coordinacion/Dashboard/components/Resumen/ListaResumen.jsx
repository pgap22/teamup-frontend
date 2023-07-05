import React from "react";
import CajaEstadistica from "../Cajas/CajaEstadistica";

const ListaResumen = ({ resumen = [] }) => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {resumen.map((estadistica) => (
        <CajaEstadistica
          key={estadistica.titulo+"-stat"}
          titulo={estadistica.titulo}
          Icon={estadistica.icon}
          cantidad={estadistica.cantidad}
        />
      ))}
    </div>
  );
};

export default ListaResumen;
