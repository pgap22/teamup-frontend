import { useEffect, useState } from "react";
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
import { obtenerEstadisticasEstudiante } from "src/api";

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
      key: 'cantidadEquipos',
      titulo: "Cantidad de equipos",
      icon: AiOutlineUser,
      cantidad: 0,
    },
    {
      key: 'partidosCompletados',
      titulo: "Partidos Completados",
      icon: MdInsertInvitation,
      cantidad: 0,
    },
    {
      key: 'solicitudesCreadas',
      titulo: "Solicitudes Creadas",
      icon: AiOutlinePullRequest,
      cantidad: 0,
    },
  ];

  const [estadistica, setEstadistica] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await obtenerEstadisticasEstudiante();
        setEstadistica(data);
      } catch (error) {

      }
    })()
  }, [])

  return (
    <EstudianteLayaout title={"Inicio"}>
      <AccionesRapidas acciones={acciones} />
      <Resumen resumen={resumen} estadistica={estadistica} />
    </EstudianteLayaout>
  );
};

export default DasboardEstudiante;
