import React from "react";
import ListaAccionesRapidas from "./ListaAccionesRapidas";
import Caja from "../Cajas/Caja";

const AccionesRapidas = ({acciones = []}) => {
  return (
    <Caja titulo={"Acciones Rapidas"}>
      <ListaAccionesRapidas acciones={acciones} />
    </Caja>
  );
};

export default AccionesRapidas;
