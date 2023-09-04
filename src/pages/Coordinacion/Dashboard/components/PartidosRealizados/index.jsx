import React from "react";
import ListaPartidosRealizados from "./ListaPartidosRealizados";
import Caja from "../../../../../components/ui/Cajas/Caja";
import { useTranlate } from "src/hooks/useTranslation";


const PartidosRealizados = ({partidos = []}) => {
  const {t} = useTranlate();
  return (
    <Caja titulo={t('partidosRealizados')}>
      <ListaPartidosRealizados partidos={partidos} />
    </Caja>
  );
};

export default PartidosRealizados;
