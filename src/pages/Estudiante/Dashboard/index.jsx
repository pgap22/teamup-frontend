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
import { useSession } from "src/hooks/useSession";
import { useTranlate } from "src/hooks/useTranslation";

const DasboardEstudiante = () => {
  const { t } = useTranlate();
  const { usuario } = useSession();

  const acciones = [
    {
      nombre: "👨‍🏫 " + t("crearEquipos"),
      url: "/estudiante/equipos",
    },
    {
      nombre: "🥇 " + t("verTusPartidos"),
      url: "/estudiante/partidos",
    },
    {
      nombre: "⛳ " + t("crearSolicitud"),
      url: "/estudiante/solicitudes",
    },
  ];

  const resumen = [
    {
      key: "cantidadEquipos",
      titulo: t("cantidadEquipos"),
      icon: AiOutlineUser,
      cantidad: 0,
    },
    {
      key: "partidosCompletados",
      titulo: t("partidosCompletados"),
      icon: MdInsertInvitation,
      cantidad: 0,
    },
    {
      key: "solicitudesCreadas",
      titulo: t("solicitudesCreadas"),
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
      } catch (error) {}
    })();
  }, []);

  return (
    <EstudianteLayaout title={t("bienvenido") + " " + usuario.nombre}>
      <AccionesRapidas acciones={acciones} />
      <Resumen resumen={resumen} estadistica={estadistica} />
    </EstudianteLayaout>
  );
};

export default DasboardEstudiante;
