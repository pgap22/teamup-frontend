import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { LuMedal } from "react-icons/lu";

import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import AccionesRapidas from "./components/AccionesRapidas";
import Resumen from "./components/Resumen";
import PartidosRealizados from "./components/PartidosRealizados";
import { useEffect, useState } from "react";
import { obtenerEstadisticasCoordinacion } from "src/api";
import {useTranlate} from "src/hooks/useTranslation";

const Dashboard = () => {
  const { t } = useTranlate();
  const acciones = [
    {
      nombre: t('actions.newTeacher'),
      url: "/coordinacion/maestros/crear",
    },
    {
      nombre: t('actions.newSport'),
      url: "/coordinacion/deportes/crear",
    },
    {
      nombre: t('actions.newPlayZone'),
      url: "/coordinacion/zonadejuego/crear",
    },
    {
      nombre: t('actions.viewPendingRequests'),
      url: "/coordinacion/solicitudes",
    },
  ];
  
  const resumen = [
    {
      key: 'solicitudesPendientes',
      titulo: t('summary.pendingRequests'),
      icon: MdOutlineArticle,
      cantidad: 0,
    },
    {
      key: 'maestroCuidandoHoy',
      titulo: t('summary.teachersCaringToday'),
      icon: AiOutlineUser,
      cantidad: 0,
    },
    {
      key: 'partidosRealizados',
      titulo: t('summary.completedMatches'),
      icon: LuMedal,
      cantidad: 0,
    },
  ];

  const [estadistica, setEstadistica] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await obtenerEstadisticasCoordinacion();
        setEstadistica(data);
      } catch (error) {

      }
    })()
  }, [])


  return (
    <CoordinacionLayout titulo={t('inicio')}>
      <div className="flex flex-col gap-4">
        <AccionesRapidas acciones={acciones} />
        <Resumen resumen={resumen} estadistica={estadistica} />
        <PartidosRealizados partidos={estadistica.deportes} />
      </div>
    </CoordinacionLayout>
  );
};

export default Dashboard;
