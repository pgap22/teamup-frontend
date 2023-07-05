import React from "react";
import DashboardLayout from "../DashboardLayout";
import { MdHouse, MdOutlineAssignment, MdOutlineSportsEsports } from "react-icons/md";

const CoordinacionLayout = ({ children, titulo, center }) => {
  const links = [
    {
        nombre: "Inicio",
        ruta: "/coordinacion",
        principal: true,
        icon: MdHouse
    },
    {
      nombre: "Deportes",
      ruta: "/coordinacion/deportes",
      icon: MdOutlineSportsEsports
    },
    {
      nombre: "Zona De Juego",
      ruta: "/coordinacion/zonadejuego",
    },
    {
      nombre: "Maestros",
      ruta: "/coordinacion/maestros",
    },
    {
      nombre: "Solicitudes",
      ruta: "/coordinacion/solicitudes",
      icon: MdOutlineAssignment
    },
  ];

  return (
    <DashboardLayout links={links} titulo={titulo} center={center}>
      {children}
    </DashboardLayout>
  );
};

export default CoordinacionLayout;
