import { MdHouse, MdSearch } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useSession } from "src/hooks/useSession";
import Button from "src/components/form/Button";
import ButtonTranslate from "src/components/translate/ButtonTranslate";
import { useTranlate } from "src/hooks/useTranslation";
const MaestroLayout = ({ children, titulo }) => {
  const {t} = useTranlate();
  const links = [
    {
      nombre: t("links.inicio"),
      principal: true,
      ruta: "/maestro",
      icon: MdHouse,
    },
    {
      nombre: t("links.buscarEquipo"),
      ruta: "/maestro/buscar",
      icon: HiOutlineDocumentSearch,
    },
  ];

  return (
    <DashboardLayout links={links} titulo={titulo} bottom={<Bottom />}>
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


export default MaestroLayout;
