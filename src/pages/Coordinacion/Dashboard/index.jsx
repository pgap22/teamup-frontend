import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { LuMedal } from "react-icons/lu";

import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import AccionesRapidas from "./components/AccionesRapidas";
import Resumen from "./components/Resumen";
import PartidosRealizados from "./components/PartidosRealizados";
import { useEffect, useState } from "react";
import { obtenerEstadisticasCoordinacion } from "src/api";

const Dashboard = () => {
  const acciones = [
    {
      nombre: "👨‍🏫 Nuevo maestro",
      url: "/coordinacion/maestros/crear",
    },
    {
      nombre: "🥇 Nuevo deporte",
      url: "/coordinacion/deportes/crear",
    },
    {
      nombre: "⛳ Nueva Zona de Juego",
      url: "/coordinacion/zonadejuego/crear",
    },
    {
      nombre: "📩 Ver Solicitudes Pendientes",
      url: "/coordinacion/solicitudes",
    },
  ];
  const resumen = [
    {
      key: 'solicitudesPendientes',
      titulo: "Solicitudes Pendientes",
      icon: MdOutlineArticle,
      cantidad: 0,
    },
    {
      key: 'maestroCuidandoHoy',
      titulo: "Maestros Cuidando Hoy  ",
      icon: AiOutlineUser,
      cantidad: 0,
    },
    {
      key: 'partidosRealizados',
      titulo: "Partidos Realizados",
      icon: LuMedal,
      cantidad: 0,
    },
  ]

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
    <CoordinacionLayout titulo="Inicio">
      <div className="flex flex-col gap-4">
        <AccionesRapidas acciones={acciones} />
        <Resumen resumen={resumen} estadistica={estadistica} />
        <PartidosRealizados partidos={estadistica.deportes} />
      </div>
    </CoordinacionLayout>
  );
};

export default Dashboard;
