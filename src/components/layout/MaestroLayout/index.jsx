import { MdHouse } from "react-icons/md";
import {HiOutlineDocumentSearch} from "react-icons/hi"

import DashboardLayout from "../../../components/layout/DashboardLayout";
const MaestroLayout = ({ children, titulo }) => {
  const links = [
    {
      nombre: "Inicio",
      ruta: "/maestro",
      icon: MdHouse,
    },
    {
        nombre: "Verficar Equipo",
        ruta: "/verificar-equipo",
        icon: HiOutlineDocumentSearch
    }
  ];

  return (
    <DashboardLayout links={links} titulo={titulo}>
      {children}
    </DashboardLayout>
  );
};

export default MaestroLayout;
