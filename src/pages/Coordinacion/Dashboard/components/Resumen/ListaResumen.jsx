import React from "react";
import CajaEstadistica from "../Cajas/CajaEstadistica";

const ListaResumen = ({ resumen = [] }) => {
  return (
    <div className="flex flex-col gap-4">
      {resumen.map((estadistica) => (
        <CajaEstadistica
          titulo={estadistica.titulo}
          Icon={estadistica.icon}
          cantidad={estadistica.cantidad}
        />
      ))}
    </div>
  );
};

export default ListaResumen;
