import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import AccionesRapidas from "../../Coordinacion/Dashboard/components/AccionesRapidas/index";
import Resumen from "../../Coordinacion/Dashboard/components/Resumen/index";

import { AiOutlinePullRequest } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdInsertInvitation } from "react-icons/md";

import {
  Equipos,
  IconButtonEquipos,
} from "src/components/estudiante/AsideEquipo";

const DasboardEstudiante = () => {
  const acciones = [
    {
      nombre: "👨‍🏫 Crear equipos",
      url: "/estudiante/equipos",
    },
    {
      nombre: "🥇 Ver tus partidos",
      url: "/estudiante/partidos",
    },
    {
      nombre: "⛳ Crea un solicitud",
      url: "/estudiante/solicitudes",
    },
  ];

  const resumen = [
    {
      titulo: "Invitaciones a equipos",
      icon: AiOutlineUser,
      cantidad: 0,
    },
    {
      titulo: "Invitaciones a partidos",
      icon: MdInsertInvitation,
      cantidad: 0,
    },
    {
      titulo: "Solicitudes en proceso",
      icon: AiOutlinePullRequest,
      cantidad: 0,
    },
  ];

  return (
    <EstudianteLayaout title={"Inicio"}>
      <AccionesRapidas acciones={acciones} />
      <Resumen resumen={resumen} />
    </EstudianteLayaout>
  );
};

export default DasboardEstudiante;
