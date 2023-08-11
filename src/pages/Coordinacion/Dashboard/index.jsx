import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { LuMedal } from "react-icons/lu";

import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import AccionesRapidas from "./components/AccionesRapidas";
import Resumen from "./components/Resumen";
import PartidosRealizados from "./components/PartidosRealizados";

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
      titulo: "Solicitudes Pendientes",
      icon: MdOutlineArticle,
      cantidad: 0,
    },
    {
      titulo: "Maestros Cuidando Hoy  ",
      icon: AiOutlineUser,
      cantidad: 0,
    },
    {
      titulo: "Partidos Realizados",
      icon: LuMedal,
      cantidad: 0,
    },
  ];

  const partidos = [
    {
      titulo: "Futbol",
      cantidad: 0,
    },
    {
      titulo: "Baloncesto",
      cantidad: 0,
    },
    {
      titulo: "Volleyball",
      cantidad: 0,
    },
  ];

  return (
    <CoordinacionLayout titulo="Inicio">
      <div className="flex flex-col gap-4">
        <AccionesRapidas acciones={acciones} />
        <Resumen resumen={resumen} />
        <PartidosRealizados partidos={partidos} />
      </div>
    </CoordinacionLayout>
  );
};

export default Dashboard;
