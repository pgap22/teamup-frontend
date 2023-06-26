import React from "react";
import ListaPartidosRealizados from "./ListaPartidosRealizados";
import Caja from "../Cajas/Caja";

const PartidosRealizados = ({partidos = []}) => {
  return (
    <Caja titulo={"Partidos Realizados"}>
      <ListaPartidosRealizados partidos={partidos} />
    </Caja>
  );
};

export default PartidosRealizados;
