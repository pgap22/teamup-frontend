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
    },
    {
      nombre: "🥇 Nuevo deporte",
      url: "/deportes/crear"
    },
    {
      nombre: "⛳ Nueva Zona de Juego",
    },
    {
      nombre: "📩 Ver Solicitudes Pendientes",
    },
  ];

  const resumen = [
    {
      titulo: "Solicitudes Pendientes",
      icon: MdOutlineArticle,
      cantidad: 1,
    },
    {
      titulo: "Maestros Cuidando Hoy  ",
      icon: AiOutlineUser,
      cantidad: 5,
    },
    {
      titulo: "Partidos Realizados",
      icon: LuMedal,
      cantidad: 30,
    },
  ];

  const partidos = [
    {
      titulo: "Futbol",
      cantidad: 10,
    },
    {
      titulo: "Baloncesto",
      cantidad: 10,
    },
    {
      titulo: "Volleyball",
      cantidad: 10,
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
