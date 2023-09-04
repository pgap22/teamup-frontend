import React from "react";
import DashboardLayout from "../DashboardLayout";
import {
  MdHouse,
  MdOutlineAssignment,
  MdOutlineSportsEsports,
} from "react-icons/md";
import Button from "../../form/Button";
import { useSession } from "../../../hooks/useSession";
import ButtonTranslate from "src/components/translate/ButtonTranslate";
import { useTranlate } from "src/hooks/useTranslation";

const CoordinacionLayout = ({ children, titulo, center }) => {
  const {t} = useTranlate();
  const links = [
    {
      nombre: t('links.home'),
      ruta: "/coordinacion",
      principal: true,
      icon: MdHouse,
    },
    {
      nombre: t('links.sports'),
      ruta: "/coordinacion/deportes",
      icon: MdOutlineSportsEsports,
    },
    {
      nombre: t('links.playZone'),
      ruta: "/coordinacion/zonadejuego",
    },
    {
      nombre: t('links.teachers'),
      ruta: "/coordinacion/maestros",
    },
    {
      nombre: t('links.requests'),
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
  const {t} = useTranlate();

  return (
    <>
      <Button onClick={logout} color={"rojo"}>{t('cerrar')}</Button>
      <ButtonTranslate />
    </>
  );
};

export default CoordinacionLayout;
