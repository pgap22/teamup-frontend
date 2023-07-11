import React from "react";
import DashboardLayout from "../DashboardLayout";
import {
  MdHouse,
  MdOutlineAssignment,
  MdOutlineSportsEsports,
} from "react-icons/md";
import Button from "../../form/Button";
import { useSession } from "../../../hooks/useSession";

const CoordinacionLayout = ({ children, titulo, center }) => {
  const links = [
    {
      nombre: "Inicio",
      ruta: "/coordinacion",
      principal: true,
      icon: MdHouse,
    },
    {
      nombre: "Deportes",
      ruta: "/coordinacion/deportes",
      icon: MdOutlineSportsEsports,
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
      icon: MdOutlineAssignment,
    },
  ];

  return (
    <DashboardLayout links={links} titulo={titulo} center={center} bottom={<Bottom/>}>
      {children}
    </DashboardLayout>
  );
};

const Bottom = () => {
  const { logout } = useSession();

  return (
    <>
      <Button onClick={logout} color={"rojo"}>Cerrar Sesion</Button>
    </>
  );
};

export default CoordinacionLayout;
