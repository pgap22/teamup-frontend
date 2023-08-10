import { MdHouse, MdSearch } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useSession } from "src/hooks/useSession";
import Button from "src/components/form/Button";
const MaestroLayout = ({ children, titulo }) => {
  const links = [
    {
      nombre: "Inicio",
      principal: true,
      ruta: "/maestro",
      icon: MdHouse,
    },
    {
      nombre: "Buscar Equipo",
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

  return (
    <>
      <Button onClick={logout} color={"rojo"}>Cerrar Sesion</Button>
    </>
  );
};


export default MaestroLayout;
