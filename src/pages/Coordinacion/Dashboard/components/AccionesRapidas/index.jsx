import React from "react";
import ListaAccionesRapidas from "./ListaAccionesRapidas";
import Caja from "../../../../../components/ui/Cajas/Caja";
import { useTranlate } from "src/hooks/useTranslation";

const AccionesRapidas = ({ acciones = [] }) => {
  const { t } = useTranlate();

  return (
    <Caja titulo={t("accionesRapidas")}>
      <ListaAccionesRapidas acciones={acciones} />
    </Caja>
  );
};

export default AccionesRapidas;
